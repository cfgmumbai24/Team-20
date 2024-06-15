import React from "react";
import styles from "./StoryDetails.module.css"; // Import the CSS Module

const StoryDetails = () => {
  const user = {
    name: "John Doe",
    age: 30,
    location: "New York, USA",
    profilePicture:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    description: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          <img src="https://via.placeholder.com/400x200" alt="Sample Image 1" />
          <p>Curabitur venenatis ut elit quis tempus. Nulla facilisi. Praesent aliquet, elit eu tincidunt euismod, turpis nisl scelerisque metus, a vulputate nulla odio nec nulla.</p>
          <img src="https://via.placeholder.com/400x200" alt="Sample Image 2" />
          <p>Donec consequat ultricies justo, sit amet suscipit lorem pharetra at.</p>
        `,
    backgroundImage: `https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630`
  };
  return (
    <div className={styles.profileContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.userDetails}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Location:</strong> {user.location}
          </p>
        </div>
        <div className={styles.profilePicture}>
          <img src={user.profilePicture} alt="User Profile" />
        </div>
      </div>
      <div
        className={styles.userDescription}
        dangerouslySetInnerHTML={{ __html: user.description }}
      ></div>
    </div>
  );
};

export default StoryDetails;