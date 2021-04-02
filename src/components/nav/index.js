import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>About</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
            </li>
            {/*<li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
            </li>*/}
          </ul>
        </div>
      </nav>
    );
  }
};
