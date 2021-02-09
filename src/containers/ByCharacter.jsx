import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/details/Details';
import { fetchCharacter } from '../services/heyArnoldAPI';
import PropTypes from 'prop-types';

function ByCharacter() {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    fetchCharacter(name).then(([res]) => {
      setCharacters(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <Details name={characters.name} image={characters.image} />
    </div>
  );
}

export default ByCharacter;

ByCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      character: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
