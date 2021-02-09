import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, image }) => (
  <Link to={`/details/${name}`}>
    <figure>
      <img className={styles.image} src={image} alt={name} />
      <figcaption>
        <p className={styles.name}>{name}</p>
      </figcaption>
    </figure>
  </Link>
);

export default Character;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
