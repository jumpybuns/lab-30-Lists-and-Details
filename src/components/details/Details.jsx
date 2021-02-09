import React from 'react';
import PropTypes from 'prop-types';

function Details({ name, image }) {
  return (
    <>
      <figure>
        <img src={image} alt={name} />
        <figcaption>
          <p>{name}</p>
        </figcaption>
      </figure>
    </>
  );
}

export default Details;

Details.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
