import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <div className="filter">
      <h3>Ratings</h3>
      <ul>
        <li><input type="radio" name="rating" /> 4.5 & up (10,000)</li>
        <li><input type="radio" name="rating" /> 4.0 & up (10,000)</li>
        <li><input type="radio" name="rating" /> 3.5 & up (10,000)</li>
        <li><input type="radio" name="rating" /> 3.0 & up (10,000)</li>
      </ul>
      <h3>Language</h3>
      <ul>
        <li><input type="checkbox" /> English (10,000)</li>
        <li><input type="checkbox" /> Español (2,719)</li>
        <li><input type="checkbox" /> Türkçe (1,250)</li>
        <li><input type="checkbox" /> Português (2,109)</li>
        <li><input type="checkbox" /> العربية (628)</li>
        <li><input type="checkbox" /> 日本語 (917)</li>
      </ul>
    </div>
  );
};

export default Filter;
