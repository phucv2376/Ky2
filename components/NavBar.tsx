import type { NextComponentType } from 'next';
import styles from '../styles/navBar.module.css';

const NavBar:NextComponentType = () => {
  return (
    <div className={styles.navBar}>
      <ul>
	<li><a href="/">Home</a></li>
	<li><a href="/journal">Journal</a></li>
	<li><a href="../pages/index.tsx">Home</a></li>
	<li><a href="../pages/index.tsx">Home</a></li>
      </ul>
    </div>
  )
}
export default NavBar;
