import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

const Photo = ({ id, urls, title }) => (
  <article data-testid="photo" id={id} className="photo-item">
    <img src={urls.small} alt={title} />
  </article>
);

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  urls: PropTypes.shape({
    small: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Photo;
