import { createClient} from 'contentful';
import PostEntry from '../components/PostEntry'
import styles from '../styles/Blog.module.scss'

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
    <div className={styles['blog-wrapper']}>
      <div className={styles['blog-banner']}>
        <div className={styles['blog-banner__content']}>
          <h3 className={styles['blog-banner__title']}>Blog</h3>
          <p className={ styles['blog-banner__blurb']}>Less of a diary, more a mish-mash collection of learning notes and post mortem on projects.</p>
        </div>
      </div>
      <div className={styles['blog-container']}>
        <div className={ styles['blog-container__inner']}>
          {posts.length > 0 && posts.map((post, postIndex) => (
            <PostEntry post={post} key={ postIndex} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default blog
