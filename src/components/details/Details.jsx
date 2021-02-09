import React from 'react';
import PropTypes from 'prop-types';

function Details({ characters }) {
  const details = characters.map((character) => {
    <li key={character.name}>{character}</li>;
  });

  return (
    <>
      <pre>
        <p>{details}</p>
      </pre>
    </>
  );
}

export default Details;

Details.propTypes = {
  characters: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
