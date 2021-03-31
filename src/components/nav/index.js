import React, { Component } from 'react'
import styles from './styles.module.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className={styles.navbar} role="navigation">
        <div className={styles.fluid}>
          <a className={styles.navBrand} href="#">Zany<span className={styles.brandSec}>Designs</span></a>
          <div className={styles.textRight}>
            <button className={styles.navbarToggler} type="button" data-toggle="collapse" data-target="#navToggle">
              <span className={styles.toggleIcon}></span>
            </button>
          </div>
        </div>
        <div className={styles.collapse} id="navToggle">
          <ul className={styles.list}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>About</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Portfolio</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};
