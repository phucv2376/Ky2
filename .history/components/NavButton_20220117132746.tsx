import React from 'react'
import { DiAtom } from 'react-icons/di';
import {motion, Variants} from 'framer-motion';

const floatingNavButton: Variants = {

}

const NavButton = () => {
  return (
    <motion.div
      animate="spin" 
      variants={floatingNavButton}
      >
      <DiAtom />
    </motion.div>
  )
}

export default NavButton
