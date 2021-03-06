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
      style={{position: "absolute", right: "1vw", top: "1vh", width: "fit-content", cursor: "pointer"}}
      onClick={{}}
      whileHover={{scale: [1, .8, 1.1],
        transition: {duration: 0.2}
        
        }}
      >
      <DiAtom style={{color: "white"}} size="3vw"/>
    </motion.div>
  )
}

export default NavButton
