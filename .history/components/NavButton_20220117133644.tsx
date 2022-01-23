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
      transition={{ease: "linear", duration: 5, repeat: Infinity}}
      style={{width: "fit-content"}}
      >
      <DiAtom style={{color: "white"}} size="3vw"/>
    </motion.div>
  )
}

export default NavButton
