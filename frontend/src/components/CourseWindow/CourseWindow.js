import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import Courses from '../Courses/Courses';
import './CourseWindow.css';

const CourseWindow = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(true);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setShowFilterButton(window.innerWidth > 768);  
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <div className="app">
      <SearchBar />
      <div className="content">
        {showFilterButton && (
          <button className="filter-toggle-button" onClick={toggleFilter}>
            {showFilter ? 'Hide Filter' : 'Show Filter'}
          </button>
        )}
        <div className={`filter ${showFilter ? 'show' : ''}`}>
          <Filter />
        </div>
        <div className="courses">
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default CourseWindow;
