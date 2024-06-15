import React from "react";
import styles from "./StoryList.module.css"; // Import the CSS Module
import StorySummary from "../StorySummary/StorySummary";

const StoryList = () => {
  // Create an array of JSX elements
  const elements = [
    <div key="1">
      <StorySummary />
    </div>,
    <div key="2">
      <StorySummary />
    </div>,
    <div key="3">
      <StorySummary />
    </div>,
    <div key="4">
      <StorySummary />
    </div>,
    <div key="5">
      <StorySummary />
    </div>,
  ];

  // Split elements into rows with max 2 columns
  const rows = [];
  for (let i = 0; i < elements.length; i += 2) {
    rows.push(elements.slice(i, i + 2));
  }
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].length % 2 != 0) {
      rows[i].push(<StorySummary />);
    }
  }

  return (
    <div className={styles.container}>
      {rows.map((row, index) => (
        <div className={styles.row} key={index}>
          {row.map((element) => (
            <div className={styles.col} key={element.key}>
              {element}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StoryList;
