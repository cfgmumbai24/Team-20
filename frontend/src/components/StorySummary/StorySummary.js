import React from 'react';
import styles from './StorySummary.module.css';

const StorySummary = (props) => {
  const { Top, Label1, Middle, backgroundImage } = props;
  return (
    <div className={styles.myComponent}>
      <img
        src={backgroundImage}
        alt="Background"
        className={styles.backgroundImage}
        style={{ opacity: 0.3 }}  
      />
      <div className={styles.content}>
        <div className={styles.topLeftText}>{Top}</div>
        <div className={styles.labelsContainer}>
          <span className={styles.label}>{Label1}</span>
        </div>
        <div className={styles.middleLeftText}>{Middle}</div>
      </div>
    </div>
  );
};

export default StorySummary;
