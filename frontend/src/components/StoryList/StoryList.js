import React from "react";
import styles from "./StoryList.module.css"; // Import the CSS Module
import StorySummary from "../StorySummary/StorySummary";

const StoryList = () => {
  // Create an array of JSX elements
  const elements = [
    <div key="1">
      <StorySummary Top="Agriculture" Lable1="farming" Lable2="farmers" Lable3="cropping" Middle="Opportunities in agriculture abound, offering diverse roles from crop cultivation to sustainable farming practices." backgroundImage="https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU="/>
    </div>,
    <div key="2">
            <StorySummary Top="Handmade Crafts" Lable1="Crafting" Lable2="farmers" Lable3="cropping" Middle="Discover the charm of rural craftsmanship, where every piece tells a story and supports local artisans" backgroundImage="https://www.amzignition.com/wp-content/uploads/2022/01/Selling-Handmade-Goods-on-Amazon-696x348-1.jpeg"/>
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
