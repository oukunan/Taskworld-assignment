import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import Layout from './hoc/Layout';
import Preference from './containers/Preference/Preference';
import Profile from './containers/Profile/Profile';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route exact path="/" component={Preference} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
