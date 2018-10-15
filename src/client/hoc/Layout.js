import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import { AuthConsumer } from '../context/AuthContext';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navbar />
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
    {({ isAuth }) => {
      return <Layout {...props} isAuth={isAuth} />;
    }}
  </AuthConsumer>
);
