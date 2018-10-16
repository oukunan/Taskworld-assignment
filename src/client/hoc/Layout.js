import React, { Component } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import Right from '../components/Right/Right';
import { AuthConsumer } from '../context/AuthContext';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navbar isAuth={this.props.isAuth} logout={this.props.logout} />
        <div className="container-layout">
          {this.props.isAuth ? (
            <div className="sub-layout">
              <Menu />
            </div>
          ) : null}
          <div className="sub-layout child">{this.props.children}</div>
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
