import React from 'react';
import styles from './ClientUse.module.scss';

export default function ClientUse() {
  return (
    <div className={styles.twHomejobSection}>
      <div className={styles.twContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.col}>
            <img src="/img/gallery/client-use.png" width="433" height="522" alt="img" />
          </div>
          <div className={styles.homeJobCol}>
            <h1 className={styles.twTitle}>Clients actually use it with me!</h1>
            <p className={styles.twParagraph}>
              Teamwork was built so you can manage ALL your client work in one platform. From
              invoicing, to time tracking, to unlimited client access, everything you need to run
              your client services is in Teamwork.
            </p>
            <div className={styles.homeJobDone}>
              <div className={styles.twAvatar}>
                <img src="/img/gallery/clientUseAvatar.png" width="50" height="50" alt="img" />
              </div>
              <div className={styles.quoteWrap}>
                <div className={styles.quoteText}>
                  “Teamwork is the first project management tool that Ive been able to get clients
                  to actually use with me. Ive tried Asana and Trello, and clients just ignored
                  them.”
                </div>
                <div className={styles.quoteAuthor}>
                  <span className={styles.twTextPink}>Rochelle Broder-Singer</span>, President/Chief
                  Word Wrangler
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
    </div>
  );
}
