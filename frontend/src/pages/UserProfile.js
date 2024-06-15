import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './UserProfile.css';
import { AuthContext } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // if (user) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/user/getsingleUser/666d848ee1fff930b6c0544f`);
          console.log('fetchUser')
          setUserData(response.data);
          console.log(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUser();
    // }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <div className="user-header">
        <img src={userData.avatarUrl} alt={`${userData.name}'s avatar`} className="user-avatar" />
        <h2 className="user-name">{userData.name}</h2>
      </div>
      <div className="user-details">
        <div className="user-email">
          <h3>Email</h3>
          <p>{userData.email}</p>
        </div>
        <div className="user-phone">
          <h3>Phone Number</h3>
          <p>{userData.phoneNumber}</p>
        </div>
        <div className="user-dob">
          <h3>Date of Birth</h3>
          <p>{userData.dateOfBirth}</p>
        </div>
        <div className="user-gender">
          <h3>Gender</h3>
          <p>{userData.gender}</p>
        </div>
        <div className="user-location">
          <h3>Location</h3>
          <p>{userData.location}</p>
        </div>
        <div className="user-interest">
          <h3>Interest</h3>
          <p>{userData.interest}</p>
        </div>
        <div className="user-progress">
          <h3>Course Progress</h3>
          <div className="step-progress-bar">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className={`step ${userData.courseProgress >= step ? 'completed' : ''}`}>
                <div className="step-circle">{step}</div>
                <div className="step-label">Step {step}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="user-courses">
          <h3>Courses Opted</h3>
          <ul>
            {userData.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
