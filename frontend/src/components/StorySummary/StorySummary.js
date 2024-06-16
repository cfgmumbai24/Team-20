import React from "react";
import styles from "./StorySummary.module.css";
import { Link } from "react-router-dom";

const StorySummary = (props) => {
  // const { Top, Label1, Middle, backgroundImage } = props;
  console.log(props._id);
  const id=props._id;
  

  
  

  const data = {
    "666e195f52974c759912e4a9"
: {
      Name: "Rahul Singh",
      Location: "Dehradun, Uttarakhand",
      Description: "Rahul Singh revolutionized the agriculture sector in Uttarakhand by introducing organic farming techniques and modern irrigation systems. He organized workshops and training sessions for local farmers, teaching them how to switch from traditional to organic farming methods. His farm now produces a variety of high-quality organic fruits and vegetables, which are sold in markets across the state and even exported to other regions. His efforts have not only increased the income of local farmers but also promoted sustainable farming practices."

    },
    "666e1afc52974c759912e4aa":{
      Name:"Priya Thakur",
      Location: "Almora, Uttarakhand",
      Description:"Recognizing the rich cultural heritage of Uttarakhand, Priya Thakur established a cooperative for local artisans. She provided them with resources and training to enhance their skills and improve the quality of their products. The cooperative now produces a wide range of handmade crafts, including handwoven textiles, intricate woodwork, and traditional jewelry. These products are marketed under a unique brand that highlights the cultural significance of each item. Priya's initiative has helped preserve traditional crafts and provided artisans with a stable source of income."
    },
    "666e1bcf52974c759912e4ab":{
       Name:"Ankit Mehra",
       Location:"Nainital, Uttarakhand",
       Description:"Ankit Mehra opened a chain of cafes and bakeries named 'Mountain Delight'. These establishments are known for their cozy ambiance and use of locally sourced ingredients. The cafes offer a variety of baked goods, traditional snacks, and specialty coffee, making them popular among both locals and tourists. Ankit has created a unique brand that emphasizes sustainability and supports local farmers and producers. The success of 'Mountain Delight' has inspired other entrepreneurs in the region to adopt similar business models."

    },
    " 666e1c5052974c759912e4ac":{
      Name:" Kavita Joshi",
      Location:"Rishikesh, Uttarakhand",
      Description:"To promote sustainable tourism, Kavita Joshi developed a series of eco-friendly resorts in the foothills of the Himalayas. These resorts offer guests a chance to experience the natural beauty of Uttarakhand while minimizing their environmental impact. Kavita's resorts provide guided treks, local cuisine, cultural programs, and eco-tourism activities. The resorts have become popular destinations for tourists seeking authentic and sustainable travel experiences. Kavita's efforts have significantly boosted the local economy and created numerous jobs in the hospitality sector."

   },
   "666e1d5352974c759912e4ad":{
    Name:"Rajiv Kumar",
    Location:"Haridwar, Uttarakhand",
    Description:"Passionate about education, Rajiv Kumar founded 'Gyan Jyoti Academy', a school that emphasizes holistic education. The academy's curriculum integrates experiential learning, environmental studies, and community service. Students are encouraged to participate in projects that benefit the local community and environment. The school has become a model for innovative education in the region, attracting students from various parts of Uttarakhand. Rajiv's vision for education goes beyond academics, focusing on developing responsible and socially conscious individuals."

 },
 "666e1dc752974c759912e4ae":{
  Name:"Suman Rawat",
  Location:"Pithoragarh, Uttarakhand",
  Description:"Suman Rawat revived the traditional pot-making industry in Uttarakhand by combining modern techniques with age-old craftsmanship. She established workshops where local potters could learn new methods and experiment with contemporary designs. The pots and other ceramic products created under her initiative are now sold in national and international markets. Suman's project has not only preserved a dying art form but also provided sustainable employment opportunities for many local artisans."

},


  }

  if (props == {}) return <div></div>;
  return (
    <Link to={`/user/story/${props._id}`}>
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
    </Link>
  );
};

export default StorySummary;
