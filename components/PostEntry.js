// Component: A single post entry on the blog page which has a listing
// Parent: Get data from /pages/blog.js
// Child: n/a

import styles from '../styles/PostEntry.module.scss';
import Link from 'next/link'
import Image from 'next/image'
const PostEntry = ({ post }) => {
  const { title, slug, publishedDate, tags, featureImage, blurb } = post.fields
  const parsedDate = publishedDate.split("-")
  const month = new Date(Number(parsedDate[0]), Number(parsedDate[1]), Number(parsedDate[2])).toLocaleString('default', { month: 'long' })

  return (
    <Link href={'/blog/' + slug} >
      <a className={styles['post-entry-wrapper']}>
        <div className={ styles['post-entry-imagewrap']}>
          <Image src={'https:' + featureImage.fields.file.url} width={featureImage.fields.file.details.image.width}
          height={featureImage.fields.file.details.image.height}
              alt={title} />
        </div>
        <time className={styles['post-entry-date']} dateTime={ publishedDate }>{parsedDate[2] + " " + month + " "+ parsedDate[0]}</time>
        <h3 className={ styles['post-entry-title']}>{ title }</h3>
        <ul className={ styles['post-entry-tags']}>{tags.length > 0 && tags.map((tag, tagIndex) => (
          <li key={ tagIndex }><span>{ tag }</span></li>
        ))}</ul>
        <p className={ styles['post-blurb']}>{ blurb }</p>
      </a>
    </Link>
  )
}

export default PostEntry
