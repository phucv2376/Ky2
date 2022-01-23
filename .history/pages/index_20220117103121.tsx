import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import { motion, Variants } from 'framer-motion';

const helloStart: String = "rgb(90, 10, 15)";
const hello: String = "rgb(20, 144, 155)";
const helloShadow = "#63372C";


const Home: NextPage = () => {
  const today:Date = new Date();
  const options:object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const h1: Variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, color: [helloStart, hello], textShadow: "1vh 1vh 1vh purple"},
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
       transition={{delay: 1, ease: "easeIn"}}
       variants={h1} 
       className={styles.hello}>Hello</motion.h1>
      </div>
    </div>
  )
}

export default Home;
