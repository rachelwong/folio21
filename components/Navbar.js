import styles from "../styles/Navbar.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import profileImage from '../public/main_image.png'
import { FaTimes, FaBars } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState} from 'react'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false) // set off by default

  return (

    <header className={styles.header}>
      <div className={`${styles['header-mob-menu']} ${toggleMenu == true ? styles['show-menu'] : styles['hide-menu']}`}>
        <button className={`${styles['header-mob-btn']}`} onClick={ () => setToggleMenu(false)}>
          <FaTimes />
        </button>
        <nav className={ styles['header-mob-nav']}>
          <ul className={styles['header-mob-navlist']}>
              <li className={styles['nav-list-item']}>
              <Link href="/">
                <a>
                  <span className={styles['nav-list-item__num']} aria-hidden="true">01  </span>Home
                </a>
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="/blog">
                  <a>
                    <span className={styles['nav-list-item__num']} aria-hidden="true">02</span>
                  Blog
                </a>
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="http://www.bitbucket.com/rachel-wong">
                  <a>
              <span className={styles['nav-list-item__num']} aria-hidden="true">03</span>
                  Bitbucket
                  </a>
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="/illustration">
                  <a>
              <span className={styles['nav-list-item__num']} aria-hidden="true">04</span>
                  Illustration
                  </a>
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="http://www.linkedin.com/in/rachwong">
                  <a>
              <span className={styles['nav-list-item__num']} aria-hidden="true">05</span>
                  Contact
                  </a>
                </Link>
              </li>
          </ul>
        </nav>
      </div>
      <div className={ styles['header-wrapper']}>
      <nav className={styles.nav}>
          <div className={styles['nav-header']}>
            <Link href="/" className="nav-home-link">
              <div className={styles['nav-homelink__wrapper']}>
                <Image src={profileImage} width={48} height={48} alt={"portfolio home"} />
                <span className={styles['nav-homelink__label']}>Rach Wong</span>
              </div>
            </Link>
            <button className={styles['nav-toggle']} onClick={ () => setToggleMenu(true)}><FaBars /></button>
          </div>
        <div className="nav-list-container">
          <ul className={styles['nav-list']}>
              <li className={styles['nav-list-item']}>
                <Link href="/"><a>
              <span className={styles['nav-list-item__num']} aria-hidden="true">01</span>
                  Home</a>
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="/blog">
                  <a>
              <span className={styles['nav-list-item__num']} aria-hidden="true">02</span>
                  Blog</a>
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="http://www.bitbucket.com/rachel-wong">
                  <a>
              <span className={styles['nav-list-item__num']} aria-hidden="true">03</span>
                  Bitbucket
                  </a>
                </Link>
              </li>
              <li className={styles['nav-list-item']}>
                <Link href="http://www.linkedin.com/in/rachwong">
                  <a>
              <span className={styles['nav-list-item__num']} aria-hidden="true">04</span>
                  Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
