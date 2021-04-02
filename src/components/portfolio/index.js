import React, { Component } from 'react'
import catBrand from '../../Assets/images/portfolio/catBrand.png';
import catWires from '../../Assets/images/portfolio/catWires.png';
import fran from '../../Assets/images/portfolio/fran.png';
import outreach from '../../Assets/images/portfolio/outreach.png';
import pokeapi from '../../Assets/images/portfolio/pokeapi.png';
import pgBrand from '../../Assets/images/portfolio/pgBrand.png';
import pgWeb from '../../Assets/images/portfolio/pgWeb.png';
import styles from './styles.module.css'

export default class Portfolio extends Component{
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.smCol} id="gallery">
          <h1 className={styles.title}>Portfolio</h1>
        </div>
        <div className={styles.row}>
          <div className={styles.btnGrp} align="center" id="filter-button">
            <button className={styles.btn} data-filter="all">All</button>
            <button className={styles.btn} data-filter="wires">Wireframing</button>
            <button className={styles.btn} data-filter="graphic">Graphic Design</button>
            <button className={styles.btn} data-filter="brand">Branding</button>
            <button className={styles.btn} data-filter="web">Web Design</button>
          </div>
          <div className={styles.gallery} data-show="filter">
            <img src={catBrand} className={styles.imgFluid} />
          </div>
          <div className={styles.gallery} data-show="filter">
            <img src={catWires} className={styles.imgFluid} />
          </div>
          <div className={styles.gallery} data-show="filter">
            <img src={fran} className={styles.imgFluid} />
          </div>
          <div className={styles.gallery} data-show="filter">
            <img src={outreach} className={styles.imgFluid} />
          </div>
          <div className={styles.gallery} data-show="filter">
            <img src={pokeapi} className={styles.imgFluid} />
          </div>
          <div className={styles.gallery} data-show="filter">
            <img src={pgBrand} className={styles.imgFluid} />
          </div>
          <div className={styles.gallery} data-show="filter">
            <img src={pgWeb} className={styles.imgFluid} />
          </div>
        </div>
      </div>
    );
  }
};
