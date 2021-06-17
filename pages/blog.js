import { createClient} from 'contentful';
import PostEntry from '../components/PostEntry'

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
  blog.layout = "bloglayout"
  if (posts.length == 0) { return "" }
  return (
    <div>
      <h1>Blog</h1>
      <div className="blog-container">
        {posts.length > 0 && posts.map((post, postIndex) => (
          <PostEntry post={post} key={ postIndex} />
        ))}
      </div>
    </div>
  )
}

export default blog
