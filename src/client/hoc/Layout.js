import React, { Component } from 'react';

import SubLayout from '../components/SubLayout/SubLayout';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import { AuthConsumer } from '../context/AuthContext';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navbar isAuth={this.props.isAuth} logout={this.props.logout} />
        <div className="container-layout">
          {this.props.isAuth ? (
            <SubLayout child="left-child">
              <Menu />
            </SubLayout>
          ) : null}
          <SubLayout child="right-child">{this.props.children}</SubLayout>
        </div>
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
