import React from 'react';
import styles from './RealTimeCollaboration.module.scss';

export default function RealTimeCollaboration() {
  return (
    <div className={styles.twClientuseSection}>
      <div className={styles.twContainer}>
        <div className={styles.col}>
          <img src="/img/gallery/collaborate.png" width="580" height="400" alt="img" />
        </div>
        <div className={styles.homeJobCol}>
          <h1 className={styles.twTitle}>
            Real-time collaboration that keeps clients, teammates, and leadership on the same page
          </h1>
          <p className={styles.twParagraph}>
            Forget crossed wires, unread Slacks, and endless emails. Collaborate in real-time with
            your team and clients to get your questions answered and projects delivered on time and
            on budget.
          </p>
          <div className={styles.homeJobDone}>
            <div className={styles.twAvatar}>
              <img src="/img/gallery/collaborate-avatar.png" width="50" height="50" alt="img" />
            </div>
            <div className={styles.quote_wrap}>
              <div className={styles.quote_text}>
                “Teamwork helps me keep up with all the thousands of activities between all our
                clients. It gives me full oversight on whats moving and whats not.”
              </div>
              <div className={styles.quote_author}>
                <span className={styles.twTextPink}>Samantha Anderson</span>, Account Director
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
      </div>
    </div>
  );
}
