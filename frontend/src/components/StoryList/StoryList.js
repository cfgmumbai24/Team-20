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
       <StorySummary Top="Cafes and Bakeries" Lable1="Baking" Lable2="farmers" Lable3="cropping" Middle="Savor the flavors of our rural café, where farm-to-table delights and homemade treats are served with a side of country charm." backgroundImage="https://cafemeetingplace.com/images/stories/features/food3_nov11.jpg"/>
    </div>,
    <div key="4">
       <StorySummary Top="Tourism and Hospitality" Lable1="Hospitality" Lable2="farmers" Lable3="cropping" Middle="Embrace the charm of Nainital's hospitality industry, where every smile welcomes guests to our picturesque lakeside retreats and cozy mountain lodges." backgroundImage="https://s3-ap-southeast-2.amazonaws.com/geg-sia-webapp2/images/image_1574828233_KnYPYsdCvwKlpOR9MekUlnWbf2GrITfZUvronguR.jpeg"/>
    </div>,
    <div key="5"> 
    <StorySummary Top="Educational Institutes and Teaching" Lable1="Teaching" Lable2="farmers" Lable3="cropping" Middle="Inspire minds and shape futures in Nainital's nurturing educational environment, where learning meets the serenity of mountain vistas" backgroundImage="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/images/articles/4bdab05a4c3386108dd155f3fd01eb2ac22f66e5.jpg"/>
    </div>,
    <div key="6"> 
    <StorySummary Top="Pot Building" Lable1="Pots" Lable2="farmers" Lable3="cropping" Middle="Pottery and ceramics offer a creative outlet rooted in tradition and craftsmanship, providing opportunities to craft unique pieces inspired by natural beauty and cultural heritage." backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYX6-w3JPzq81gGTik7fMHKn3dtA_V5nP0tA&s"/>
    </div>
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
