// components/layout/Navbar.tsx
import React from 'react';
import styles from '../../styles/Navbar.module.css';
import { FaSearch, FaShoppingBasket, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.iconLeft}>
        <FaSearch className={styles.icon} href='/src/app/search' />
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <h1 className={styles.logoText}>
            <FaShoppingBasket className="inline-block mr-2" />
            Farmers Market
          </h1>
        </Link>
      </div>
      <div className={styles.iconRight}>
        <FaUserCircle className={styles.icon} href='/src/app/profile'/>
      </div>
    </nav>
  );
};

export default Navbar;