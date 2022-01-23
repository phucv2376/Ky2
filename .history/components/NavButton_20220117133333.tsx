import React from 'react'
import { DiAtom } from 'react-icons/di';
import {motion, Variants} from 'framer-motion';

const floatingNavButton: Variants = {
  spin: {rotate: 360}
}

const NavButton = () => {
  return (
    <motion.div
      animate="spin" 
      variants={floatingNavButton}
      transition={{delay: 3}}
      style={{border: "red 2px solid"}}
      >
      <DiAtom style={{color: "white"}} size="3vw"/>
    </motion.div>
  )
}

export default NavButton
