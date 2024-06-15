import React from 'react';
import styles from './StorySummary.module.css';

const StorySummary = () => {
  return (
    <div className={styles.myComponent}>
      <div className={styles.topLeftText}>Top Left Text</div>
      <div className={styles.labelsContainer}>
        <span className={styles.label}>Label 1</span>
        <span className={styles.label}>Label 2</span>
        <span className={styles.label}>Label 3</span>
      </div>
      <div className={styles.middleLeftText}>Middle Left Text</div>
    </div>
  );
};

export default StorySummary;
