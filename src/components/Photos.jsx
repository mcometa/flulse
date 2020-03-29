import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

const Photos = ({ photos }) => {
  return (
    <main data-testid="photos" className="Main-container">
      {photos.map((photo) => {
        const { urls, id, alt_description: altDescriotion } = photo;
        return <Photo key={id} id={id} urls={urls} title={altDescriotion} />;
      })}
    </main>
  );
};

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Photos;
