import React, { useState, useEffect } from 'react';
import CharacterList from '../components/list/CharacterList';
import { fetchCharacter } from '../services/heyArnoldAPI';
import PropTypes from 'prop-types';

function ByCharacter() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacter(match.params.character).then((res) => {
      setCharacter(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <CharacterList character={character} />
    </div>
  );
}

ByCharacter.propTypes = {
  atch: PropTypes.shape({
    params: PropTypes.shape({
      character: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ByCharacter;
