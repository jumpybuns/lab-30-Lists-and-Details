import React, { Component } from 'react';
import { BrowswerRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../components/home/Home';
import Details from '../../components/details/Details';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:details" component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}
