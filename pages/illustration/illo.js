import { createClient} from 'contentful';
import styles from '../../styles/Illo.module.scss'
import Image from 'next/image'
import '../../node_modules/photoswipe/dist/default-skin/default-skin.css'
import '../../node_modules/photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

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



const illo = ({ images }) => {

  if (!images.length) return ""
  console.log('images:', images)

  let imagelinks = images.map((item) => {
    return {
      src: 'https:' + item.fields.image.fields.file.url,
      thumbnail: 'https:' + item.fields.thumbnail.fields.file.url,
      srcheight: item.fields.image.fields.file.details.image.height.toString(),
      srcwidth: item.fields.image.fields.file.details.image.width.toString(),
      thumbnailWidth: 420,
      thumbnailHeight: 420,
      isSelected: true,
      caption: item.fields.title
    }
  })

      console.log('imagelinks:', imagelinks)



  return (
    <div className={styles["illo-container"]}>
      <div className={styles['illo__inner']}>
        <div className={styles["illo__content"]}>
          <h3 class={ styles['illo__content__heading']}>Illustrations</h3>
        </div>
        <Gallery>
          <div className={styles['illo__gallery__inner']}>
            {imagelinks.map((image, imageIdx) => (
              <Item
                key={imageIdx}
                original={image.src}
                thumbnail={image.thumbnail}
                width={ image.srcwidth}
                height={ image.srcheight}
                className={ styles['illo-gallery-item']}
              >
              {({ ref, open }) => (
                <img ref={ref} onClick={open} src={image.thumbnail} className={ styles['illo-gallery-item']}/>
                  )}
              </Item>
            ))}
            </div>
          </Gallery>

        {/* <Gallery images={imagelinks} className={styles["illo-gallery"]} /> */}
      </div>
    </div>
  )
}

export default illo
