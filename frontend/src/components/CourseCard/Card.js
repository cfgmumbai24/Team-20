import React from 'react';
import './Card.css';

const Card = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-details">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <div className="course-rating">
          <span className="rating">{course.rating} ★</span>
          <span>({course.reviews} reviews)</span>
        </div>
        <div className="course-info">
          <span>{course.totalHours} total hours</span>
          <span>{course.lectures} lectures</span>
          <span>{course.level}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
