import React, { Component } from 'react'
import selfie from '../../Assets/images/Jnkyj2tF_400x400.jpg';
import styles from './styles.module.css'

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div className={styles.container}>
          <h1>A little about me...</h1>
          <img src={selfie} height={240} width={240} className={styles.portImg} alt="Alexandria Strawter" />
          <p className={styles.lead}>My name is Alexandria, the red-haired web dev, but you can call me Lexx! I am a Houston based graphic and web designer. I am currently working towards
            my degree in Web Design and Development at Full Sail University.  I have always found joy in designing and
            chose to study in an environment that works with my schedule and allows me to expand my skill set. I look
            foward to helping manage your business branding needs, social media sites, designing flyers and business cards, as well as creating the
            best web design to fit your needs. I am excited to update my portfolio as I create more projects and designs
            to showcase my abilities.
          </p>
          {/*<button type="button" className="btn btn-lg btn-custom" onClick="window.open('https://drive.google.com/file/d/0B7vhvT47lsbPWU15TG42d1RhdXM/view?usp=sharing');">View Resume</button>*/}
        </div>
      </div>
    );
  }
};
