import React from 'react';
import styles from './GrowBusiness.module.scss';

export default function GrowBusiness() {
  return (
    <div className={styles.twHomejobSection}>
      <div className={styles.twContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.homeJobCol}>
            <h1 className={styles.twTitle}>
              Increase profitability and <br />
              grow your business
            </h1>
            <p className={styles.twParagraph}>
              Teamwork gives you the tools and reports you need to maximize resources and never miss
              a billable minute again. Get a bird’s eye view of every project, from milestones to
              project planning, budgeting, time tracking, and more.
            </p>
            <div className={styles.homeJobDone}>
              <div className={styles.twAvatar}>
                <img src="/img/gallery/grow-business-avatar.png" width="50" height="50" alt="img" />
              </div>
              <div className={styles.quote_wrap}>
                <div className={styles.quote_text}>
                  “My stress is way down because my team members are in the driver’s seat, and I
                  know what’s happening every day.”
                </div>
                <div className={styles.quote_author}>
                  <span className={styles.twTextPink}>Kfir Pravda</span>, Pravda Media
                </div>
              </div>
            </div>
            <div className={styles.homeSwitchingTo_cta}>
              <button type="button" className={styles.btn}>
                Start your Free Trial
              </button>
              <p className={styles.creditCard}>No credit card required</p>
            </div>
          </div>
          <div className={styles.col}>
            <img src="/img/gallery/growBusiness.png" width="600" height="480" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
