import React, { Component } from 'react';
import CharacterList from '../components/list/CharacterList';
import { fetchCharacters } from '../services/xfilesAPI';

export default class MainCharacters extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({
      loading: false,
      characters,
    });
  }
  render() {
    const { loading, characters } = this.state;

    if (loading) return <h1>Loading...</h1>;
    return (
      <div>
        <CharacterList characters={characters} />
      </div>
    );
  }
}
