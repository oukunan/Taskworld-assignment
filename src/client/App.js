import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import Layout from './hoc/Layout';
import Preference from './containers/Preference/Preference';
import Profile from './containers/Profile/Profile';
import Signup from './containers/Signup/Signup';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/preference" component={Preference} />
          <Route exact path="/" component={Signup} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
