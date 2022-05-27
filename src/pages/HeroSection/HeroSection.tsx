import React from 'react';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <div className={styles.twSection}>
      <div className={styles.twContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.col}>
            <h1 className={styles.title}>
              Switching to <br />
              Teamwork?
            </h1>
            <p className={styles.info}>
              Easily import all your tasks and <br />
              projects in one click.
            </p>
            <div className={(styles.quote, styles.homeSwitchingTo_cta)}>
              <button type="button" className={styles.btn}>
                Start your Free Trial
              </button>
              <p className={styles.creditCard}>No credit card required</p>
            </div>
          </div>
          <div className={styles.col}>
            <img src="/img/gallery/easily-import.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
