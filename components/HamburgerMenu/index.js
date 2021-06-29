import React, { useState } from 'react'
// import styled from 'styled-components'
import { MenuToggle } from './menuToggle'
import { NavMenu } from "./navMenu";
import { motion } from 'framer-motion'
import styles from '../../styles/HamburgerMenu.module.scss'

// governs the rate or feel of the transition itself only
const menuTransition = {type: "spring", duration: 1, stiffness: 33, delay: 0.2}

// govern only the sliding from the right to the left
// units of measure % must be consistent between the two states. can't have one % and the other does not
const menuVariants = {
  open: {
    transform: "translateX(0%)"
  },
  closed: {
    transform: "translateX(100%)"
  }
}

export function HamburgerMenu(props) {

  // toggling state
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={styles['hamburger-menu-container']}>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} className={styles['hamburger']}/>
      <motion.div className={ styles['hamburger-menu']} initial={false} animate={isOpen ? "open" : "closed"} variants={menuVariants} transition={menuTransition}>
        <NavMenu isOpen={ isOpen }/>
      </motion.div>
    </div>
  )
}
