import React, { Component } from 'react';

import ContainerLayout from '../containers/ContainerLayout/ContainerLayout';
import Navbar from '../components/Navbar/Navbar';
import { AuthConsumer } from '../context/AuthContext';

class Layout extends Component {
  render() {
    const { isAuth, logout, children } = this.props;
    return (
      <div className="layout">
        <Navbar isAuth={isAuth} logout={logout} />
        <ContainerLayout isAuth={isAuth}>{children}</ContainerLayout>
      </div>
    );
  }
}

export default props => (
  <AuthConsumer>
    {({ isAuth, uid, login, logout }) => {
      return (
        <Layout
          {...props}
          isAuth={isAuth}
          logout={logout}
          login={login}
          uid={uid}
        />
      );
    }}
  </AuthConsumer>
);
