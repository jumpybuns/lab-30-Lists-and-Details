import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <Link to={`/details/${name}`}>
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
      </figcaption>
    </figure>
  </Link>
);

export default Character;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
