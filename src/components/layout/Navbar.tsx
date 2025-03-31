// components/ui/Navbar.tsx

import React from 'react';
import styles from '../../styles/Navbar.module.css'; // Adjust the path as necessary
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.iconLeft}>
        <FaSearch className={styles.icon} />
      </div>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>Logo</h1>
      </div>
      <div className={styles.iconRight}>
        <FaUserCircle className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
