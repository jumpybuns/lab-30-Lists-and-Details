import React, { useState, useEffect } from 'react';
import Character from '../components/list/Character';
import { fetchCharacters } from '../services/heyArnoldAPI';
import PropTypes from 'prop-types';

function ByCharacter() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters().then((res) => {
      setCharacter(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <Character character={character} />
      <h1>{character[0]?.name}</h1>
      <img src={character[0]?.image} />
    </div>
  );
}

ByCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ByCharacter;
