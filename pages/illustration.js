import styles from '../styles/Illo.module.scss'
import { createClient} from 'contentful'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { motion } from 'framer-motion'
import Header from '../components/Header'

export const getStaticProps = async () => {

  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_CDN_API
  })

  const res = await client.getEntries({ content_type: 'illustration'})
    return {
      props: {
        images: res.items
      },
      revalidate: 1 // to regenerate and requery for data when there are updates
    }
}

const illustration = ({ images }) => {


  if (!images.length) return ""
  return (
    <>
    <Header title={ "Illustration"} />

    <div className={styles['illo-container']}>
      <div className={styles['illo__inner']}>
        <div className={styles['illo__content']}>
          <h3 className={styles['illo__content__heading']}>Illustration</h3>
        </div>
        <div className={styles['illo__gallery__inner']}>
          <Gallery>
            {images.map((image, imageIdx) => (
                <Item
                original={'https:' + image.fields.image.fields.file.url}
                thumbnail={'https:' + image.fields.thumbnail.fields.file.url}
                width={image.fields.image.fields.file.details.image.width}
                height={image.fields.image.fields.file.details.image.height}
                key={imageIdx}
                >
                {({ ref, open }) => (
                  <motion.img
                    ref={ref}
                    onClick={open}
                    src={image.fields.thumbnail.fields.file.url}
                    initial={{ y: 15 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5
                    }}
                    alt="Illustration - Rachel Wong"
                  />
                  )}
                </Item>
            ))}
          </Gallery>
        </div>
      </div>
      </div>
    </>
  )
}

export default illustration
