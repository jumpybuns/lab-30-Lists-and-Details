import React, { useState, useEffect } from 'react';
import CharacterList from '../components/list/CharacterList';
import { fetchCharacters } from '../services/heyArnoldAPI';

function MainCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters().then((res) => {
      setCharacters(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div>
        <CharacterList characters={characters} />
      </div>
    </>
  );
}

export default MainCharacters;
