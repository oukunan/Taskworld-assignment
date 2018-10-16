import React, { Component } from 'react';

import ContainerLayout from '../components/ContainerLayout/ContainerLayout';
import Navbar from '../components/Navbar/Navbar';
import { AuthConsumer } from '../context/AuthContext';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navbar isAuth={this.props.isAuth} logout={this.props.logout} />
        <ContainerLayout isAuth={this.props.isAuth}>
          {this.props.children}
        </ContainerLayout>
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
