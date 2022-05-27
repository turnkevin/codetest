import React from 'react';
import styles from './Support.module.scss';

export default function Support() {
  return (
    <div className={styles.twHomeSupportSection}>
      <div className={styles.twContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.homeJobCol}>
            <h1 className={styles.twHeading}>
              <span className={styles.twTextPink}>Support</span> that’s here for you when you need
              them
            </h1>
            <p className={styles.twSupportParagraph}>
              Our support team delivers first-class customer support around the clock. We’re here to
              answer any question and help every step of the way.
            </p>
            <div className={styles.homeSupportBtns}>
              <a href="tel:+18448198553" className={styles.homeSupportBtn}>
                <img src="/img/gallery/logo2.svg" width="50" height="50" alt="logo" />
                <span className={styles.homeSupportBtnSpan}>Call</span>
              </a>
              <a href="tel:+18448198553" className="{styles.home-support-btn}">
                <img src="/img/gallery/logo1.svg" width="50" height="50" alt="logo" />
                <span className={styles.homeSupportBtnSpan}>Contact</span>
              </a>
            </div>
            <p className={styles.twParagraph}>See why we have a 99% customer happiness rating</p>
            <div className={styles.homeJobDone}>
              <div className={styles.twAvatar}>
                <img src="/img/gallery/support-avatar.png" width="50" height="50" alt="avatar" />
              </div>
              <div className={styles.quote_wrap}>
                <div className={styles.quote_text}>
                  “What reassured us was Teamwork’s reliable and prompt customer service. If ever an
                  issue came up, Teamwork replied and resolved it promptly.”
                </div>
                <div className={styles.quote_author}>
                  <span className={styles.twTextPink}>Shekhar Tamasker</span>, Section Head of
                  Scheduling and Reporting
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <img src="/img/gallery/support.png" width="470" height="454" alt="support" />
          </div>
        </div>
      </div>
    </div>
  );
}
