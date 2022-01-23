import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import {motion} from 'framer-motion';

const Home: NextPage = () => {
  const today:Date = new Date();
  const options:object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className={styles.body}>
      <div className={styles.bg}></div>
      <NavBar />
      <h1 className={styles.date}>{today.toLocaleDateString("en-US", options)}</h1>
      <h1 className={styles.hello}>Hello</h1>
    </div>
  )
}

export default Home;
