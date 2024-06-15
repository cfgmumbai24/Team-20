import React from "react";
import styles from "./StorySummary.module.css";

const StorySummary = (props) => {
  // const { Top, Label1, Middle, backgroundImage } = props;
  console.log(props);
  if (props == {}) return <div></div>;
  return (
    <div className={styles.myComponent}>
      <img
        src={props.image}
        alt="Background"
        className={styles.backgroundImage}
        style={{ opacity: 0.3 }}
      />
      <div className={styles.content}>
        <div className={styles.topLeftText}>{props.title}</div>
        <div className={styles.labelsContainer}>
          <span className={styles.label}>{props.label}</span>
        </div>
        <div className={styles.middleLeftText}>{props.desc}</div>
      </div>
    </div>
  );
};

export default StorySummary;
