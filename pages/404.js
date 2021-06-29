import Carousel from '../components/Carousel'
import Link from 'next/link'
import styles from '../styles/Notfound.module.scss'
import Header from '../components/Header'
const NotFound = () => {
  return (
    <>
    <Header title={ "404 Wrong page"} />

    <div className={styles.container}>
      <Carousel />
      <div className={styles['notfound-content']}>
        <h3 className={ styles['notfound-content__title']}>Wrong way</h3>
        <p className={styles['notfound-content__blurb']}>The page you're looking for doesn't exist. Please head back home or send me an <a className={ styles['notfound-content__blurb__link']} href="mailto:hello.rachelwong@gmail.com">email</a></p>
        <Link href="/">
          <a className={styles['notfound-content__btn'] }>
            Return home
          </a>
        </Link>
      </div>
      </div>
    </>
  )
}

export default NotFound
