import React, { useEffect, useState } from "react";
import styles from "./StoryDetails.module.css"; // Import the CSS Module
import { Link, useNavigate, useParams } from "react-router-dom";

const StoryDetails = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const completeCourses = (e) => {
    e.preventDefault();
    alert("Complete the relevant courses!"); // Show alert message
    //navigate('/courses'); // Navigate to /courses
  };

  let { id } = useParams();
   
  const data = {
    "666e195f52974c759912e4a9"
: {
  Image:"https://thechinaacademy.org/wp-content/uploads/2024/01/f0c4987e-075f-4763-a65b-0614ecf01dc9.png",

      Name: "Rahul Singh",
      Location: "Dehradun, Uttarakhand",
      Description: "Rahul Singh revolutionized the agriculture sector in Uttarakhand by introducing organic farming techniques and modern irrigation systems. He organized workshops and training sessions for local farmers, teaching them how to switch from traditional to organic farming methods. His farm now produces a variety of high-quality organic fruits and vegetables, which are sold in markets across the state and even exported to other regions. His efforts have not only increased the income of local farmers but also promoted sustainable farming practices."

    },
    "666e1afc52974c759912e4aa":{
      Image:"https://dhaaramagazine.in/wp-content/uploads/2021/02/v3-300x200.jpg",
      Name:"Priya Thakur",
      Location: "Almora, Uttarakhand",
      Description:"Recognizing the rich cultural heritage of Uttarakhand, Priya Thakur established a cooperative for local artisans. She provided them with resources and training to enhance their skills and improve the quality of their products. The cooperative now produces a wide range of handmade crafts, including handwoven textiles, intricate woodwork, and traditional jewelry. These products are marketed under a unique brand that highlights the cultural significance of each item. Priya's initiative has helped preserve traditional crafts and provided artisans with a stable source of income."
    },
    "666e1bcf52974c759912e4ab":{
      Image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/C78F/production/_89778015_02fff36a-5560-4233-a102-0f13547c7eff.jpg.webp",
       Name:"Ankit Mehra",
       Location:"Nainital, Uttarakhand",
       Description:"Ankit Mehra opened a chain of cafes and bakeries named 'Mountain Delight'. These establishments are known for their cozy ambiance and use of locally sourced ingredients. The cafes offer a variety of baked goods, traditional snacks, and specialty coffee, making them popular among both locals and tourists. Ankit has created a unique brand that emphasizes sustainability and supports local farmers and producers. The success of 'Mountain Delight' has inspired other entrepreneurs in the region to adopt similar business models."

    },
    "666e1c5052974c759912e4ac":{
      Image:"https://sc0.blr1.cdn.digitaloceanspaces.com/article/138367-xdnehhcvma-1584264011.jpg",
      Name:" Kavita Joshi",
      Location:"Rishikesh, Uttarakhand",
      Description:"To promote sustainable tourism, Kavita Joshi developed a series of eco-friendly resorts in the foothills of the Himalayas. These resorts offer guests a chance to experience the natural beauty of Uttarakhand while minimizing their environmental impact. Kavita's resorts provide guided treks, local cuisine, cultural programs, and eco-tourism activities. The resorts have become popular destinations for tourists seeking authentic and sustainable travel experiences. Kavita's efforts have significantly boosted the local economy and created numerous jobs in the hospitality sector."

   },
   "666e1d5352974c759912e4ad":{
    Image:"https://news.microsoft.com/source/asia/wp-content/uploads/2024/01/Hero-1536x989.jpg",
    Name:"Rajiv Kumar",
    Location:"Haridwar, Uttarakhand",
    Description:"Passionate about education, Rajiv Kumar founded 'Gyan Jyoti Academy', a school that emphasizes holistic education. The academy's curriculum integrates experiential learning, environmental studies, and community service. Students are encouraged to participate in projects that benefit the local community and environment. The school has become a model for innovative education in the region, attracting students from various parts of Uttarakhand. Rajiv's vision for education goes beyond academics, focusing on developing responsible and socially conscious individuals."

 },
 "666e1dc752974c759912e4ae":{
  Image:"https://ichef.bbci.co.uk/images/ic/1024xn/p0j19xkk.jpg.webp",
  Name:"Suman Rawat",
  Location:"Pithoragarh, Uttarakhand",
  Description:"Suman Rawat revived the traditional pot-making industry in Uttarakhand by combining modern techniques with age-old craftsmanship. She established workshops where local potters could learn new methods and experiment with contemporary designs. The pots and other ceramic products created under her initiative are now sold in national and international markets. Suman's project has not only preserved a dying art form but also provided sustainable employment opportunities for many local artisans."

},
  }
const user=data[id]
console.log(user);
  
  return (
    <Link to="/">
      <div className="userDetails">
        <img
          className={styles.profileContainerImg}
          src={user.backgroundImage}
          alt="background image"
        />
        <div className={styles.detailsContainer}>
          <div className={styles.userDetails}>
            <p>
              <strong>Name:</strong> {user.Name}
            </p>
            <p>
              <strong>Age:</strong> 18
            </p>
            <p>
              <strong>Location:</strong> {user.Location}
            </p>
            <p>
              <strong>Location:</strong> {user.Description}
            </p>
          </div>
          <div className={styles.profilePicture}>
            <img src={user.Image} alt="User Profile" />
          </div>
        </div>
        <div
          className={styles.userDescription}
          dangerouslySetInnerHTML={{ __html: user.description }}
        ></div>
         
      </div>
    </Link>
  );
};

export default StoryDetails;
