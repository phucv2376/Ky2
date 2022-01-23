import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

const h1 = {
  hidden: {opacity: 0, color: "white"},
  visible: {opacity: 1m color: "black"},
  }

const Home: NextPage = () => {
  const today:Date = new Date();
  const options:object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div>
      <div className={styles.bg}></div>
      <NavBar />
      <h1 className={styles.date}>{today.toLocaleDateString("en-US", options)}</h1>
      <div className={styles.center}>
       <motion.h1
       initial="hidden" 
       animate="visible" 
       transition={{delay: 1, duration: 1}}
       variants={h1} 
       className={styles.hello}>Hello</motion.h1>
      </div>
    </div>
  )
}

export default Home;
