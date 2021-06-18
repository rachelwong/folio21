// Component: A single post entry on the blog page which has a listing
// Parent: Get data from /pages/blog.js
// Child: n/a

import styles from '../styles/PostEntry.module.scss';
import Link from 'next/link'

const PostEntry = ({ post }) => {
  const { title, slug, publishedDate, tags } = post.fields

  return (
    <div className={styles['post-entry-container']}>
      <h3 className={ styles['post-entry-title']}>{ title }</h3>
      <ul className={ styles['post-entry-tags']}>{tags.length > 0 && tags.map((tag, tagIndex) => (
        <li key={ tagIndex }>{ tag }</li>
      )) }</ul>
      <time className={styles['post-entry-date']} datetime={ publishedDate }>{publishedDate}</time>
      <Link href={"/blog/" + slug} className={ styles['post-entry-link']}><a>Go to Page</a></Link>
    </div>
  )
}

export default PostEntry
