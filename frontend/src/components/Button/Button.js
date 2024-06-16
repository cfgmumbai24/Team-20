import React from 'react';
import styles from './Button.module.css'

const RoundButton = ({ text, onClick }) => {

  return <button className={styles.button} onClick={onClick}>{text}</button>;
};

export default RoundButton