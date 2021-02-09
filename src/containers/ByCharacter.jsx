import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Character from '../components/list/Character';
import { fetchCharacter } from '../services/heyArnoldAPI';
import PropTypes from 'prop-types';

function ByCharacter() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    fetchCharacter(name).then((res) => {
      setCharacter(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <Character character={character} />
    </div>
  );
}

ByCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ByCharacter;
