import React, { Component } from 'react'
import styles from './styles.module.css'

export default class Portfolio extends Component{
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.smCol} id="gallery">
            <h1 className={styles.title}>Gallery</h1>
          </div>
          <div align="center">
            <button className={styles.btn} data-filter="all">All</button>
            <button className={styles.btn} data-filter="wires">Wireframing</button>
            <button className={styles.btn} data-filter="graphic">Graphic Design</button>
            <button className={styles.btn} data-filter="brand">Branding</button>
            <button className={styles.btn} data-filter="web">Web Design</button>
          </div>
          <br />
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter wires">
            <img src="http://fakeimg.pl/365x365/" className={styles.imgFluid} />
          </div>
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter graphic">
            <img src="http://fakeimg.pl/365x365/" className={styles.imgFluid} />
          </div>
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter brand">
            <img src="http://fakeimg.pl/365x365/" className={styles.imgFluid} />
          </div>
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter web">
            <img src="http://fakeimg.pl/365x365/" className={styles.imgFluid} />
          </div>
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter wires">
            <img src="http://fakeimg.pl/365x365/" className={styles.imgFluid} />
          </div>
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter graphic">
            <img src="http://fakeimg.pl/365x365/" className={styles.imgFluid} />
          </div>
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter brand">
            <img src="http://fakeimg.pl/365x365/" className={styles.imgFluid} />
          </div>
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter web">
            <img src="http://fakeimg.pl/365x365/" className={styles.imgFluid} />
          </div>
        </div>
      </div>
    );
  }
};
