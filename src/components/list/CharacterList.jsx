import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.name}>
      <Character image={character.image} name={character.name} />
    </li>
  ));

  return <ul data-testid="characters"> {characterElements}</ul>;
};

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
