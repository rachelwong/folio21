import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import styles from '../../styles/HamburgerMenu.module.scss'
import Link from 'next/link'
const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }
  &:hover {
    a {
      color: #555;
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

// the links have slightly staggered delays in each transition
// initial is false because they do not appear from the beginning

export function NavMenu({ isOpen }) {
  return (
    <div className={ styles['hamburger-nav-menu-container']}>
      <ul className={ styles['hamburger-nav-list']}>
        <motion.li
          className={styles['hamburger-menu-navlink'] }
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li
          className={styles['hamburger-menu-navlink'] }
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link href="/blog">Blog</Link>
        </motion.li>
        <motion.li
          className={styles['hamburger-menu-navlink'] }
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <Link href="/illustration" rel="noopener noreferrer">Illustration</Link>
        </motion.li>
        <motion.li
          className={styles['hamburger-menu-navlink'] }
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.7, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.25, duration: 0.05 },
            },
          }}
        >
          <a href="http://www.bitbucket.org/rachel-wong" target="_blank" rel="noopener noreferrer">Bitbucket</a>
        </motion.li>
        <motion.li
          className={styles['hamburger-menu-navlink'] }
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.7, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.25, duration: 0.05 },
            },
          }}
        >
          <a href="http://www.github.com/rachelwong" target="_blank" rel="noopener noreferrer">Github</a>
        </motion.li>
        <motion.li
          className={styles['hamburger-menu-navlink'] }
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <a href="http://www.linkedin.com/in/rachwong" target="_blank" rel="noopener noreferrer">Contact</a>
        </motion.li>
      </ul>
    </div>
  );
}