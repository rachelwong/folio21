import Image from 'next/image'
import footerImage from '../public/footer-image.png'
import styles from '../styles/Footer.module.scss';
import Link from 'next/link';
import GithubIcon from '../public/github-brands.svg'
import LinkedinIcon from '../public/linkedin-brands.svg'
import InstagramIcon from '../public/instagram-brands.svg'

const Footer = () => {
  return (
    <div className="footer-container">
      <svg className="page-wave" viewBox="0 0 1440 116" preserveAspectRatio="none" fill="#c8c8d3" style={{transform: "scaleY(-1)"}}><path d="M0,80.4l40-21.1C80,37.7,160-3.9,240,1s160,58.5,240,74.1c80,16.2,160-5.6,240-10.7c80-4.9,160,4.9,240,21.1c80,15.6,160,37.4,240,26.5s160-52.6,200-74.1l40-21.1V0H0V80.4z"></path></svg>
      <footer className={styles.footer}>
        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-image-wrapper']}>
            {/* <Image src={footerImage} width={180} height={ 220}/> */}
          </div>
          <div className={styles['footer-nav-wrapper']}>
            <nav className={styles['footer-nav']}>
              <ul className={styles['footer-nav-list']}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/illustration">Illustration</Link>
                </li>
                <li>
                  <Link href="http://www.bitbucket.com/rachel-wong" target="_blank">Bitbucket</Link>
                </li>
                <li>
                  <Link href="http://www.linkedin.com/in/rachwong" target="_blank">Contact</Link>
                </li>
              </ul>
            </nav>
            <nav className={styles['footer-social-nav']}>
            <ul className={styles['footer-social-nav__list']}>
              <li>
                <Link href="http://www.github.com/rachelwong">
                  <a className={ styles['footer-social-nav__list__link']}>
                    <Image src={GithubIcon} width={20} height={ 20}/>
                    <span className="sr-only">Github account</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="http://www.instagram.com/itsonlyher">
                  <a className={ styles['footer-social-nav__list__link']}>
                    <Image src={InstagramIcon} width={20} height={ 20}/>
                    <span className="sr-only">Instagram</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="http://www.linkedin.com/in/rachwong">
                  <a className={ styles['footer-social-nav__list__link']}>
                    <Image src={LinkedinIcon} width={20} height={ 20}/>
                    <span className="sr-only">Linkedin</span>
                  </a>
                </Link>
              </li>
            </ul>
              <small className={ styles['footer-copyright']}> Made with NextJS x Contentful | Rachel Wong © 2021</small>
            </nav>
          </div>
        </div>
        </footer>
      </div>
  )
}

export default Footer