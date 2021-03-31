import React, { Component } from 'react'
import styles from './styles.module.css'

export default class Jumbotron extends Component {
  render() {
    return (
      <div className={styles.jumbotron}>
        <div className={styles.container}>
          <h1 className={styles.h1}>ZANY<span className={styles.secondary}>DESIGNS</span></h1>
          <p className={styles.shadow}>Where Crazy Meets Creative</p>
          <p>
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
          </p>
        </div>
      </div>
    );
  }
};
