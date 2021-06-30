import styles from '../styles/PostEntry.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const PostEntry = ({ post }) => {
  const { title, slug, publishedDate, tags, featureImage, blurb } = post.fields
  const parsedDate = publishedDate.split("-")
  const month = new Date(Number(parsedDate[0]), Number(parsedDate[1]), Number(parsedDate[2])).toLocaleString('default', { month: 'long' })

  return (
      <div className={styles['post-entry-wrapper']}
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5}}
      >
        <div className={ styles['post-entry-imagewrap']}>
          <Image src={'https:' + featureImage.fields.file.url} width={featureImage.fields.file.details.image.width}
            height={featureImage.fields.file.details.image.height}
            alt={title} aria-hidden={ false }/>
        </div>
      <time className={styles['post-entry-date']} dateTime={publishedDate}>{parsedDate[2] + " " + month + " " + parsedDate[0]}</time>
      <Link href={'/blog/' + slug} rel=" noopener noreferrer" className={styles['post-entry-title__link']}>
          <a href={'/blog/' + slug}>
            <h3 className={styles['post-entry-title']}>{title}</h3>
          </a>
        </Link>
        <ul className={ styles['post-entry-tags']}>{tags.length > 0 && tags.map((tag, tagIndex) => (
          <li key={ tagIndex }><span>{ tag }</span></li>
        ))}</ul>
        <p className={ styles['post-blurb']}>{ blurb }</p>
      </div>
  )
}

export default PostEntry
