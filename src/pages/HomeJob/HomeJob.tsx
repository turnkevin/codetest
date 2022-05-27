import React from 'react';
import styles from './HomeJob.module.scss';

export default function HomeJob() {
  return (
    <div className={styles.twHomejobSection}>
      <div className={styles.twContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.homeJobCol}>
            <h1 className={styles.twTitle}>
              The last project <br />
              management tool youll <br />
              ever use
            </h1>
            <p className={styles.twParagraph}>
              From PM essentials like project templates, task management, and custom fields to
              wishlist favorites like time tracking, billing, gantt chart, and assigning cards to
              multiple team members, Teamwork has you covered.
            </p>
            <div className={styles.homeJobDone}>
              <div className={styles.twAvatar}>
                <img src="/img/gallery/tw-avatar.png" width="50" height="50" alt="img" />
              </div>
              <div className={styles.quote_wrap}>
                <div className={styles.quote_text}>
                  “Teamwork is the first thing I open and the last thing I close: it tells me what
                  happened when I was asleep, what I need to do that day, and it helps me plan for
                  the future.”
                </div>
                <div className={styles.quote_author}>
                  <span className={styles.twTextPink}>Renee R</span>, Project manager
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
            <img src="/img/gallery/home-job.png" width="600" height="480" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
