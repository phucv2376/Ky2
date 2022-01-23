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
      >
      <DiAtom style={{color: "white"}} size="1x"/>
    </motion.div>
  )
}

export default NavButton
