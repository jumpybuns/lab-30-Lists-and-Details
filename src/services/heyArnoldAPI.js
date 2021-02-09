export const fetchCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((results) =>
      results.map(({ name, image }) => ({
        name,
        image,
      }))
    );
};

export const fetchCharacter = (name) => {
  return fetch(
    `https://hey-arnold-api.herokuapp.com/api/v1/characters?name=${name}`
  )
    .then((res) => res.json())
    .then((results) =>
      results.map(({ name, image }) => ({
        name,
        image,
      }))
    );
};
