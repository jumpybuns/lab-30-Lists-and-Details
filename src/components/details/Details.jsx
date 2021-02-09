import React from 'react';
import PropTypes from 'prop-types';

function Details({ characters }) {
  const details = characters.map((character) => {
    <li key={character.name}>{details}</li>;
  });

  return (
    <>
      <figure>
        <figcaption>{details}</figcaption>
      </figure>
    </>
  );
}

export default Details;

Details.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
