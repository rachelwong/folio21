import { createClient } from 'contentful'
import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import Head from 'next/head'

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
          <a href={`/blog/${node.data.target.fields.slug}`}>            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
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
  },
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
      revalidate: 1
    }
  }
}

const Post = ({ post }) => {
  console.log("post", post)
  const {
    featureImage, mainText, title, slug, publishedDate
  } = post.fields

  return (
    <div>
      <h1>Blog post entry</h1>
      <h2>Title: { title }</h2>
      <Image
        src={'https:' + featureImage.fields.file.url}
        width={featureImage.fields.file.details.image.width}
        height={featureImage.fields.file.details.image.height}
        alt={title}
      />
      <div className="post-mainText">
        { documentToReactComponents(mainText,renderOptions)}
      </div>
    </div>
  )
}

export default Post
