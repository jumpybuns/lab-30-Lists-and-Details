export const findCharacters = () => {
  return fetch(
    'https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters'
  )
    .then((res) => res.json())
    .then((characters) =>
      characters.map(({ name, image, description }) => ({
        name,
        image,
        text: description,
      }))
    );
};
