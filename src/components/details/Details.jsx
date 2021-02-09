import React from 'react';
import PropTypes from 'prop-types';

function Details({ name, image, characters }) {
  const details = characters.map((character) => {
    <li key={character.name}>{details}</li>;
  });

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
  characters: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
