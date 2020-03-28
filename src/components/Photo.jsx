import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

const Photo = ({ id, url, title }) => (
  <article id={id} className="photo-item">
    <img src={url} alt={title} />
  </article>
);

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Photo;
