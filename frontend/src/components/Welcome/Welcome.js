// WelcomeScreen.js
import React from "react";
import styles from "./Welcome.module.css"; // Import the CSS module
import { Link, Navigate } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={styles.welcomeScreen}>
      <img
        src={
          "https://miro.medium.com/v2/resize:fit:1400/1*gbhEKTdVb1_p4AQPypWT5g.jpeg"
        }
        alt="Image"
      />
      <div className={styles.welcomeText}>
        <span class={styles.white}></span>Welcome to{" "}
        <span class={styles.blue}>मार्ग</span>
        <span className={styles.lightblue}>shala</span>
      </div>
      <div className={styles.cardsContainer}>
        <Link to={"/user/generic_stories"}>
          <div
            className={styles.card}
            style={{ backgroundImage: "url(path_to_your_card1_image.jpg)" }}
          >
            <div className={styles.cardHeading}>KhojShala</div>
            <div className={styles.cardDescription}>
              Empowering individuals to discover and seize local opportunities
              with step-by-step guidance, from initial idea to successful
              execution. Perfect for those seeking to start and thrive in
              their ventures."
            </div>
          </div>
        </Link>
        <div
          className={styles.card}
          style={{ backgroundImage: "url(path_to_your_card2_image.jpg)" }}
        >
          <div className={styles.cardHeading}>Swarozgar</div>
          <div className={styles.cardDescription}>
            Designed for those with a clear business vision, offering mentorship
            and funding to accelerate growth and achieve
            entrepreneurial success."
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.helloWorldButton}>
          Want us to decide for you?
        </button>
      </div>
    </div>
  );
};

export default Welcome;
