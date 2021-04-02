import React, { Component } from 'react'
import styles from './styles.module.css'

export default class Testimonials extends Component{
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.smCol}>
          <h1 className={styles.title}>These clients are <span className={styles.secondary}>CRAZY</span> about our designs!</h1>
        </div>
        <div className={styles.row}>
          <div className={styles.col6}>
            <div className={styles.media}>
              <img src="https://i.pravatar.cc/64?img=1" className={styles.centerMedia} alt="... "/>
              <div className={styles.mediaBody}>
                <h5 className={styles.mt0}>Jane Doe</h5>
                <p>Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
              </div>
            </div>
          </div>
          <div className={styles.col6}>
            <div className={styles.media}>
              <img src="https://i.pravatar.cc/64?img=60" className={styles.centerMedia} alt="... "/>
              <div className={styles.mediaBody}>
                <h5 className={styles.mt0}>John Doe</h5>
                <p>Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
              </div>
            </div>
          </div>
          <div className={styles.col6}>
            <div className={styles.media}>
              <img src="https://i.pravatar.cc/64?img=30" className={styles.centerMedia} alt="... "/>
              <div className={styles.mediaBody}>
                <h5 className={styles.mt0}>Jessica Rabbit</h5>
                <p>Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
              </div>
            </div>
          </div>
          <div className={styles.col6}>
            <div className={styles.media}>
              <img src="https://i.pravatar.cc/64?img=14" className={styles.centerMedia} alt="... "/>
              <div className={styles.mediaBody}>
                <h5 className={styles.mt0}>Jake Farm</h5>
                <p>Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
