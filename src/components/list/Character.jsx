import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, description }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{description}</p>
    </figcaption>
  </figure>
);

export default Character;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
