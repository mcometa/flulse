import React from 'react';

import './FilterBar.css';

const FilterBar = () => {
  return (
    <div className="filterbar">
      Filters:
      <select className="select">
        <option>Select orientation...</option>
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
      </select>
    </div>
  );
};

export default FilterBar;
