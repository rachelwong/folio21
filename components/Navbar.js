import styles from "../styles/Navbar.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import profileImage from '../public/main_image.png'

const Navbar = () => {

  return (
    <header className={styles.header}>
      <div className={ styles['header-wrapper']}>
      <nav className={styles.nav}>
        <Link href="/" className={styles['nav-homelink']}>
          <div className="nav-homelink__wrapper">
            <Image src={profileImage} width={48} height={48} alt={"portfolio home"} />
            <span className={styles['nav-homelink__label']}>Rachel Wong</span>
          </div>
        </Link>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-list-item']}>
            <span class={styles['nav-list-item__num']} aria-hidden="true">01</span>
            Home</li>
          <li className={styles['nav-list-item']}>
            <span class={styles['nav-list-item__num']} aria-hidden="true">02</span>
            Projects</li>
          <li className={styles['nav-list-item']}>
            <span class={styles['nav-list-item__num']} aria-hidden="true">03</span>
            Blog</li>
          <li className={styles['nav-list-item']}>
            <span class={styles['nav-list-item__num']} aria-hidden="true">04</span>
            Shots</li>
          <li className={styles['nav-list-item']}>
            <span class={styles['nav-list-item__num']} aria-hidden="true">05</span>
            Contact</li>
        </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
