import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
    const today: Date = new Date();
    return (
        <div>
            <div className={styles.bg}></div>
            <NavBar />
            <h1 className={styles.date}>
                {today.toLocaleDateString("en-US", options)}
            </h1>
        </div>
    );
};

export default Home;
