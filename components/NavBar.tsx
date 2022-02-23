import type { NextComponentType } from "next";
import styles from "../styles/navBar.module.css";
import Link from "next/link";

const NavBar: NextComponentType = () => {
  return (
    <div className={styles.navBar}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/journal">
            <a>Journal</a>
          </Link>
        </li>
        <li>
          <Link href="/toDoList">
            <a>To Do List</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
