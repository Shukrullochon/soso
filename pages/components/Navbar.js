// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <il >YOUTUB</il>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/register">Register SHU IKKINCHI PAGE</Link></li>
      </ul>
    </nav>
  );
}
