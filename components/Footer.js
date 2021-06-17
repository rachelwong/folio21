import Image from 'next/image'
import footerImage from '../public/footer-image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/Footer.module.scss';
import Link from 'next/link';
import GithubIcon from '../public/github-brands.svg'
import LinkedinIcon from '../public/linkedin-brands.svg'
import InstagramIcon from '../public/instagram-brands.svg'
import EmailIcon from '../public/envelope-open-text-solid.svg'

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <div className={styles.footerWave}>
        <svg preserveAspectRatio="xMaxYMax" width="1440" height="74" viewBox="0 0 1440 74" class="Hero__Swoops-sc-13y35jq-4 bMVQrx"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
      </div> */}
      <footer className={styles.footer}>
        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-image-wrapper']}>
            <Image src={footerImage} width={180} height={ 220}/>
          </div>
          <div class={styles['footer-nav-wrapper']}>
            <nav class={styles['footer-nav']}>
              <ul class={styles['footer-nav-list']}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Projects</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Shots</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </nav>
            <nav class={styles['footer-social-nav']}>
            <ul class={styles['footer-social-nav__list']}>
              <li>
                <Link href="/">
                  <a class={ styles['footer-social-nav__list__link']}>
                    <Image src={GithubIcon} width={20} height={ 20}/>
                    <span class="sr-only">Github account</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a class={ styles['footer-social-nav__list__link']}>
                    <Image src={InstagramIcon} width={20} height={ 20}/>
                    <span class="sr-only">Instagram</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a class={ styles['footer-social-nav__list__link']}>
                    <Image src={LinkedinIcon} width={20} height={ 20}/>
                    <span class="sr-only">Linkedin</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a class={ styles['footer-social-nav__list__link']}>
                    <Image src={EmailIcon} width={20} height={ 20}/>
                    <span class="sr-only">Email</span>
                  </a>
                </Link>
              </li>
            </ul>
              <small class={ styles['footer-copyright']}> Rachel Wong (c) 2021</small>
            </nav>
          </div>
        </div>
        </footer>
      </div>
  )
}

export default Footer