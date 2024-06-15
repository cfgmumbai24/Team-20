import React from 'react';
import styles from './StorySummary.module.css';

const StorySummary = (props) => {
  const { Top, Label1, Middle, backgroundImage } = props;
  return (
    <div className={styles.myComponent}>
      <img
        src={"https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU="}
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
