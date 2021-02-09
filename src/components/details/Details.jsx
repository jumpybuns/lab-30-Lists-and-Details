import React from 'react';
import PropTypes from 'prop-types';

function Details({ name, image }) {
  // const details = characters.map((character) => {
  //   <li key={character.name}>{character}</li>;
  // });
  // console.log(name);

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
