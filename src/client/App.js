import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './app.css';
import Layout from './hoc/Layout';
import Preference from './containers/Preference/Preference';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Route exact path="/" component={Preference} />
        </Router>
      </Layout>
    );
  }
}

export default App;
