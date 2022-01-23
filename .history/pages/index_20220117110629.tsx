import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import { motion, Variants } from 'framer-motion';

const helloStart= "rgb(90, 200, 155)";
const hello = "rgb(255, 188, 181)";
const helloShadow = "#63372C";


const Home: NextPage = () => {
  const today:Date = new Date();
  const options:object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const h1: Variants = {
    visible: {opacity: [0, 1, 1], 
    color: [helloStart, hello, hello], 
    textShadow: [`0vh 0vh 0vh ${helloShadow}`,`0vh 0vh 0vh ${helloShadow}`,`0vh 0vh 0vh ${helloShadow}`,`.5vh .5vh .5vh ${helloShadow}`]},
  }
  return (
    <div>
      <div className={styles.bg}></div>
      <NavBar />
      <h1 className={styles.date}>{today.toLocaleDateString("en-US", options)}</h1>
      <div className={styles.center}>
       <motion.h1
       initial="hidden" 
       animate="visible"
       transition={{delay: 1, duration: 2, ease: "easeIn"}}
       variants={h1} 
       className={styles.hello}>Hello</motion.h1>
      </div>
    </div>
  )
}

export default Home;
