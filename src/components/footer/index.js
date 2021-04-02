import React, { Component } from 'react'
import styles from './styles.module.css'

export default class Footer extends Component{
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.smCol}>
          <h1 className={styles.h1}>ZANY<span className={styles.secondary}>DESIGNS</span></h1>
        </div>
        <div className={styles.row}>
        <div className={styles.smCol}>
          <a href="https://www.facebook.com/astrawter" role="button" target="_blank" rel="noreferrer">
            <img className={styles.social} alt="facebook" src="images/social/fb.png" />
          </a>
          <a href="https://twitter.com/AStrawter" role="button" target="_blank" rel="noreferrer">
            <img className={styles.social} alt="twitter" src="images/social/twitter.png" />
          </a>
          <a href="https://www.linkedin.com/in/astrawter" role="button" target="_blank" rel="noreferrer">
            <img className={styles.social} alt="linkedin" src="images/social/li.png" />
          </a>
          <a href="https://github.com/astrawter" role="button" target="_blank" rel="noreferrer">
            <img className={styles.social} alt="github" src="images/social/gh.png" />
          </a>
          </div>
        </div>
      </div>
    );
  }
};
