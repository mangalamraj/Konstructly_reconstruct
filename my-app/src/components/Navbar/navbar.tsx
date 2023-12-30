"use client"
import { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleContactClick = () => {
    // Add functionality for the "Contact Us" click, for example, scroll to the contact section
    console.log('Contact Us clicked!');
    // You can add additional functionality here, such as scrolling to the contact section.
    // Close the menu after clicking "Contact Us"
    setShowMenu(false);
  };

  return (
    <div className={styles.navbarGrand}>
      <div className={styles.navbarParent}>
        <div className={styles.BrandHead}>
          <img src="https://konstructly.com/images/logo.svg" alt="" width="110px" />
        </div>
        <div className={styles.navitems}>
          <div className={styles.item1}>Home</div>
          <div className={styles.item2}>Feature</div>
          <div className={styles.item3}>Pricing</div>
          <div className={styles.item4}>About</div>
          <div className={styles.Getstarted} onClick={handleContactClick}>
            Contact Us
          </div>
        </div>
        <div className={styles.lightdarkndButton}>
          <div className={`${styles.hamburger} ${showMenu ? styles.cross : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.lightModeDarkMode}>
            {/* Add your moon, slash, and sun icons here */}
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}></div>
          <div className={styles.mobileMenuItems}>
            <div className={styles.item1} onClick={handleContactClick}>
              Home
            </div>
            <div className={styles.item2} onClick={handleContactClick}>
              Feature
            </div>
            <div className={styles.item3} onClick={handleContactClick}>
              Pricing
            </div>
            <div className={styles.item4} onClick={handleContactClick}>
              About
            </div>
            <div className={styles.Getstarted} onClick={handleContactClick}>
              Contact Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
