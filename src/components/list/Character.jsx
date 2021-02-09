import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <figure>
    <Link to={`/details/${name}`}>
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
      </figcaption>
    </Link>
  </figure>
);

export default Character;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
