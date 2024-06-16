import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import Courses from '../Courses/Courses';
import './CourseWindow.css';

const CourseWindow = () => {
  

  return (
    <div className="app">
      <SearchBar />
      <div className="content">
          <Filter />
        </div>
        <div className="courses">
          <Courses />
        </div>
      </div>
  
  );
};

export default CourseWindow;
