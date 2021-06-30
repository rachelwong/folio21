import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import styles from '../../styles/Post.module.scss'
import Slider from 'react-slick'
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useRouter } from "next/router"
import Arrow from '../../public/arrow-right-solid.svg'
import Image from 'next/image'

// Initialise connection with contentful server
const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_CDN_API
})

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)
// from https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <SyntaxHighlighter language={ node.data.target.fields.language } style={docco}>{ node.data.target.fields.code }</SyntaxHighlighter>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content.length === 1 && node.content[0].marks.find((x) => x.type === "code")) {
        return <pre>{children}</pre>
      }
      return <p>{ children }</p>
    }
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      return (
        <SyntaxHighlighter language="javascript" style={docco}>{ text}</SyntaxHighlighter>
      )
    }
  }
};

// get full list of possible slug paths (links)
export const getStaticPaths = async () => {
  const res = await client.getEntries({content_type: 'post'})

  // parse the response into an array of params objects with each a slug path
  const paths = res.items.map(item => {
    return {
      params: {
        slug: item.fields.slug
      } // be used by getStaticProps to get data of one specific page
    }
  })
  return {
    paths,
    fallback: true // go to skeleton component if content not available
  }
}

// retrieve the data for the specific slug in the URL query=
export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: 'post',
    'fields.slug' : params.slug
  })

  return {
    props: {
      post: res.items[0], // pass in only the first one because slugs are unique
    },
    revalidate: 1
  }

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false // not permanent in the sense that the slug might be used by future content so it should behave normally then
      }
    }
  }

}

const Post = ({ post }) => {

  if (!post) return "" // error handling when new content is not available

  const router = useRouter()

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false, /* must have this for fade to work */
  };

  const {
    mainText, title, publishedDate
  } = post.fields

  const parsedDate = publishedDate.split("-")
  const month = new Date(Number(parsedDate[0]), Number(parsedDate[1]), Number(parsedDate[2])).toLocaleString('default', { month: 'long' })

  return (
    <div className={styles['post-wrapper']}>
      <div className={styles['post-banner']}>
        <Slider {...settings} className={['post-banner-slider']}>
          <div className={styles['post-slide1']} id="slide1"></div>
          <div className={styles['post-slide2']} id="slide2"></div>
          <div className={styles['post-slide3']} id="slide3"></div>
        </Slider>
        <div className={styles['post-banner__content']}>
          <time className={styles['post-banner__date']} dateTime={ publishedDate } >{ parsedDate[2] + " " + month + " "+ parsedDate[0] }</time>
          <h3 className={styles['post-banner__title']}>{ title }</h3>
        </div>
      </div>
      <div className={styles['post-container']}>
        <div className={ styles['post-container__inner']}>
          { documentToReactComponents(mainText,renderOptions)}
        </div>
      </div>
      <div className={styles['post-footer-nav']}>
          {router.pathname !== "/" && (
          <button onClick={() => router.back()} className={styles['post-footer-nav__btn']}>
            <span className={styles['post-footer-nav__btn__label'] }>Go Back</span>
            <Image src={Arrow} width={15} height={15} alt="" aria-hidden={ true }/>
          </button>
          )}
      </div>
    </div>
    )
}

export default Post
