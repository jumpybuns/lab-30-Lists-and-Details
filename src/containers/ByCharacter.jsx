import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/details/Details';
import { fetchCharacter } from '../services/heyArnoldAPI';
import PropTypes from 'prop-types';

function ByCharacter() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    fetchCharacter(name).then((res) => {
      setCharacters(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <Details {...characters} />
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
