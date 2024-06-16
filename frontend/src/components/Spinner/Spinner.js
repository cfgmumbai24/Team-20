// Spinner.js
import React from "react";
import styles from "./Spinner.module.css"; // Import the CSS file for spinner styling

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
