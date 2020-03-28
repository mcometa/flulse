import React from 'react';
import PropTypes from 'prop-types';

const FilterBar = ({ show }) => {
  if (show) {
    return <div>Filter bar</div>;
  }

  return null;
};

FilterBar.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default FilterBar;
