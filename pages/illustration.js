import styles from '../styles/Illo.module.scss'
import { createClient} from 'contentful'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { motion } from 'framer-motion'
// import Header from '../components/Header'
import Head from 'next/head'

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
      <Head>
      <title>Illustrations | Rachel Wong front end developer</title>
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
        <meta property="twitter:title" content={`Illustration | Rachel Wong Front end developer Brisbane`}></meta>
        <meta property="og:title" content={`Illustration| Rachel Wong, Front end developer Brisbane`}></meta>
    </Head>

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
