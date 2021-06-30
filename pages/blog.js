import { createClient} from 'contentful';
import PostEntry from '../components/PostEntry'
import styles from '../styles/Blog.module.scss'
import Slider from 'react-slick'
import "../node_modules/slick-carousel/slick/slick-theme.css"
import "../node_modules/slick-carousel/slick/slick.css"
import Head from 'next/head'
// initialise connection with contentful backend
export const getStaticProps = async () => {

  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_CDN_API
  })

  const res = await client.getEntries({ content_type: 'post'})
    return {
      props: {
        posts: res.items
      },
      revalidate: 1 // to regenerate and requery for data when there are updates
    }
}

const blog = ({ posts }) => {

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

  if (posts.length == 0) { return "" }

  return (
    <>
    <Head>
      <title>Blog | Rachel Wong front end developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Front end Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta property="og:image" content="/social_screen.png"></meta>
        <meta name="description" content="Rachel Wong's online portfolio for front end development" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Rachel Wong | Front end developer" />
        <meta name="og:description" property="og:description" content="" />
        <meta property="og:site_name" content="Rachel Wong | Front end developer" />
        <meta property="og:url" content="http://www.rachelwong.dev" />
        <meta property="twitter:title" content={`Blog| Rachel Wong Front end developer Brisbane`}></meta>
        <meta property="og:title" content={`Blog | Rachel Wong, Front end developer Brisbane`}></meta>
    </Head>
    <div className={styles['blog-wrapper']}>
      <div className={styles['blog-banner']}>
        <Slider {...settings} className={['blog-banner-slider']}>
          <div className={styles['blog-slide1']} id="slide1"></div>
          <div className={styles['blog-slide2']} id="slide2"></div>
          <div className={styles['blog-slide3']} id="slide3"></div>
        </Slider>
        <div className={styles['blog-banner__content']}>
          <h3 className={styles['blog-banner__title']}>Thoughts & Writings</h3>
          <p className={ styles['blog-banner__blurb']}>A mish-mash collection of learning notes and project post-mortems.</p>
        </div>
      </div>
      <div className={styles['blog-container']}>
        <div className={ styles['blog-container__inner']}>
          {posts.length > 0 && posts
            .sort((a, b) => new Date(b.fields.publishedDate) - new Date(a.fields.publishedDate))
            .map((post, postIndex) => (
            <PostEntry post={post} key={ postIndex} />
          ))}
        </div>
      </div>
      </div>
      </>
  )
}

export default blog
