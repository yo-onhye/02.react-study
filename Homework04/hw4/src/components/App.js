import React, { Component } from 'react';
import Main from './Main';
import Profile from './Profile';
import Fortune from './Fortune';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/fortune/:name&:birthday" component={Fortune} />
        </Switch>
      </div>
    );
  }
}

export default App;
