import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuth: false,
    uid: ''
  };

  login = id => {
    this.setState({ isAuth: true, uid: id });
  };

  logout = () => {
    this.setState({ isAuth: false, uid: '' });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          uid: this.state.uid,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
