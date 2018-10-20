import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Preference from './containers/Preference/Preference';
import Signup from './containers/Signup/Signup';
import ProtectedRoute from './context/ProtectedRoute';


const routeList = [
  { path: '/profile' },
  { path: '/password' },
  { path: '/notification' },
  { path: '/connected' },
  { path: '/order' },
  { path: '/payment' },
  { path: '/shipping' },
  { path: '/credits' }
];
class App extends Component {
  render() {
    let routes = null;
    routes = routeList.map((route, i) => (
      <ProtectedRoute key={i} path={route.path} component={() => null} />
    ));
    return (
      <Layout>
        <Switch>
          {routes}
          <ProtectedRoute path="/preference" component={Preference} />
          <Route exact path="/" component={Signup} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
