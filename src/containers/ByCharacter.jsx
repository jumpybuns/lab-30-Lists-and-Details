import React, { useState, useEffect } from 'react';
import CharacterList from '../components/list/CharacterList';
import { fetchCharacters } from '../services/heyArnoldAPI';

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
      <CharacterList character={character} />
    </div>
  );
}

export default ByCharacter;
