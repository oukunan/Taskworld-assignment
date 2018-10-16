import React, { Component } from 'react';
import axios from '../../axios-order';

import Button from '../../components/UI/Button/Button';
import { AuthConsumer } from '../../context/AuthContext';
import Right from '../../components/Right/Right';
import Header from '../../components/UI/Header/Header';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    isLogin: false
  };

  componentWillMount() {
    axios.get('/session').then(res => {
      if (res.data.email) {
        this.props.login(res.data._id);
        this.props.history.push('/preference');
      }
    });
  }

  submitHandler = e => {
    e.preventDefault();
    if (this.state.isLogin) {
      axios
        .post('/login', this.state)
        .then(res => {
          this.props.login(res.data.id);
          this.props.history.push('/preference');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post('signup', this.state)
        .then(res => {
          this.setState({ isLogin: true });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  authToggle = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }));
  };

  render() {
    const { isLogin } = this.state;
    return (
        <Right>
          <Header name={isLogin ? 'Login' : 'Sign up'} />
          <form onSubmit={this.submitHandler}>
            <div className="input-signup">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.handleInput}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </div>

            <Button>{isLogin ? 'Login' : 'Sign up'}</Button>
          </form>

          <div className="toggleLogin" onClick={this.authToggle}>
            Change to {isLogin ? 'Sing up' : 'Login'}.
          </div>
        </Right>
    );
  }
}

export default props => (
  <AuthConsumer>
    {({ isAuth, login }) => {
      return <Signup {...props} isAuth={isAuth} login={login} />;
    }}
  </AuthConsumer>
);
