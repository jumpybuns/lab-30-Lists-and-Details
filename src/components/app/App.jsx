import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../components/home/Home';
import ByCharacter from '../../containers/ByCharacter';
import MainCharacters from '../../containers/MainCharacters';

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Router>
          <Switch>
            <Route exact path="/" component={MainCharacters} />
            <Route path="/details/:name" component={ByCharacter} />
          </Switch>
        </Router>
      </div>
    );
  }
}
