import React from 'react';
import styles from './Card.module.scss';

export default function Card() {
  return (
    <div className={styles.twSelectcarSection}>
      <div className={styles.twContainer}>
        <div className={(styles.twHeading, styles.twSectionCards)}>
          <h3>
            Skip the learning curve and start immediately with our pre-built{' '}
            <span className={styles.twTextPink}>templates</span>
          </h3>
        </div>
        <div className={styles.twParagraph}>
          No matter the job, <span className="twTextPink">Teamwork</span> has a template to get it
          done. Whether you or your client is in marketing, operations, creative, engineering, or IT
          - weve got you covered.
        </div>
        <div className={styles.twSectionCard}>
          <a href="http://localhost:3000/" className={styles.twCard}>
            <div className={styles.twSectionCardPicture}>
              <img src="/img/gallery/card3.png" width="350" height="225" alt="card" />
            </div>
            <div className={styles.twSectionCardWrap}>
              <div className={styles.twSectionCardTag}>Project Management</div>
              <div className={styles.twSectionCardName}>Project Management</div>
              <div className={styles.twSectionCardCta}>
                <div className={styles.twSectionCardCtaHeart}>
                  <img src="/img/gallery/card-heart.jpg" width="22" height="20" alt="card" />
                  <span className={styles.twSpan}>Popular</span>
                </div>
                <button type="button" className={styles.twButton}>
                  View Template
                </button>
              </div>
            </div>
          </a>
          <a href="http://localhost:3000/" className={styles.twCard}>
            <div className={styles.twSectionCardPicture}>
              <img src="/img/gallery/card2.png" width="350" height="225" alt="card" />
            </div>
            <div className={styles.twSectionCardWrap}>
              <div className={styles.twSectionCardTag}>Project Management</div>
              <div className={styles.twSectionCardName}>Project Management</div>
              <div className={styles.twSectionCardCta}>
                <div className={styles.twSectionCardCtaHeart}>
                  <img src="/img/gallery/card-heart.jpg" width="22" height="20" alt="card" />
                  <span className={styles.twSpan}>IT</span>
                </div>
                <button type="button" className={styles.twButton}>
                  Website project plan
                </button>
              </div>
            </div>
          </a>
          <a href="http://localhost:3000/" className={styles.twCardSecond}>
            <div className={styles.twSectionCardPicture}>
              <img src="/img/gallery/card1.png" width="350" height="225" alt="card" />
            </div>
            <div className={styles.twSectionCardWrap}>
              <div className={styles.twSectionCardTag}>Project Management</div>
              <div className={styles.twSectionCardName}>Project Management</div>
              <div className={styles.twSectionCardCta}>
                <div className={styles.twSectionCardCtaHeart}>
                  <img src="/img/gallery/card-heart.jpg" width="22" height="20" alt="card" />
                  <span className={styles.twSpan}>Operations</span>
                </div>
                <button type="button" className={styles.twButton}>
                  New Client Abording
                </button>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.twSectionBtns}>
          <a href="/signup" className={styles.twSectionBtn1}>
            Start your Free Trial
          </a>
          <a href="/signup" className={styles.twSectionBtn2}>
            View template library
          </a>
        </div>
      </div>
    </div>
  );
}
