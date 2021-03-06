import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.name}>
      <Link to={`/details/${character.name}`}>
        <Character image={character.image} name={character.name} />
      </Link>
    </li>
  ));

  return <ul data-testid="arnold"> {characterElements}</ul>;
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
