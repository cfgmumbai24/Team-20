import React from 'react';
import CourseCard from '../CourseCard/Card';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      image: 'https://www.classcentral.com/report/wp-content/uploads/2022/04/BCG-Web-Development-NEW-Banner.png',
      title: 'The Complete 2024 Web Development Bootcamp',
      instructor: 'Dr. Angela Yu',
      rating: 4.7,
      reviews: 383228,
      totalHours: '61.5',
      lectures: 373,
      level: 'All Levels',
      price: 3099,
    },
    {
      image: 'https://www.classcentral.com/report/wp-content/uploads/2022/04/BCG-Web-Development-NEW-Banner.png',
      title: 'The Web Developer Bootcamp 2024',
      instructor: 'Colt Steele',
      rating: 4.7,
      reviews: 273137,
      totalHours: '74',
      lectures: 726,
      level: 'All Levels',
      price: 3499,
    },
    {
      image: 'https://www.classcentral.com/report/wp-content/uploads/2022/04/BCG-Web-Development-NEW-Banner.png',
      title: 'Web Development | HTML | CSS | JavaScript | jQuery | NodeJS',
      instructor: 'Web University by Harsha Vardhan',
      rating: 4.4,
      reviews: 2018,
      totalHours: '62.5',
      lectures: 594,
      level: 'All Levels',
      price: 4099,
    },
  ];

  return (
    <div className="courses">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default Courses;
