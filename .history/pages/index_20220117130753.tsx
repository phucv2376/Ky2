import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import NavButton from '../components/NavButton';
import { motion, Variants } from 'framer-motion';

const helloStart= "rgb(155, 100, 155)";
const hello = "rgb(255, 188, 181)";
const helloShadow = "#63372C";


const Home: NextPage = () => {
  const today:Date = new Date();
  const options:object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const fadeInAndShadow: Variants = {
    visible: {opacity: [0, 1, 1], 
    color: [helloStart, helloStart, hello, hello], 
    textShadow: [`0vh 0vh 0vh ${helloShadow}`,`0vh 0vh 0vh ${helloShadow}`,`0vh 0vh 0vh ${helloShadow}`,`.5vh .5vh .5vh ${helloShadow}`]},
  }
  const slideUp: Variants = {
    offScreen: { height: "200vh", x: ".3vw"},
    onScreen: {y: ["110vh", ".2vh", "1vh", "1vh"], x: "1vw"},
  }

  return (
    <div>
      <div className={styles.bg}></div>
      {/* <NavBar /> */}
      <NavButton />
      <motion.div
        className={styles.dateContainer}
        initial="offScreen"
        animate="onScreen"
        transition={{delay: 1, duration: 2}}
        variants={slideUp}>
        <motion.h1 className={styles.date}>{today.toLocaleDateString("en-US", options)}</motion.h1>
      </motion.div>
      <div className={styles.center}>
       <motion.h1
       animate="visible"
       transition={{delay: 0.5, duration: 2, ease: "easeIn"}}
       variants={fadeInAndShadow} 
       className={styles.hello}>Hello</motion.h1>
      </div>
    </div>
  )
}

export default Home;
