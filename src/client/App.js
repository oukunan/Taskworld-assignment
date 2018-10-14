import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import Layout from './hoc/Layout';
import Preference from './containers/Preference/Preference';
import Profile from './containers/Profile/Profile';
import Signup from './containers/Signup/Signup';
import ProtectedRoute from './context/ProtectedRoute';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/preference" component={Preference} />
          <Route exact path="/" component={Signup} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
