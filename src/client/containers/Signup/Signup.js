import React, { Component } from 'react';
import axios from '../../axios-preference';

import { signupInput } from '../../data/data';
import { AuthConsumer } from '../../context/AuthContext';
import Right from '../../components/Right/Right';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Header from '../../components/UI/Header/Header';
import Modal from '../../components/UI/Modal/Modal';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    isLogin: false,
    isError: false,
    errorMessage: ''
  };

  componentDidMount() {
    axios.get('/session').then(res => {
      if (res.data.email) {
        this.props.login(res.data.id);
        this.props.history.push('/preference');
      }
    });
  }

  submitHandler = e => {
    e.preventDefault();

    const { email, password, isLogin, isError } = this.state;

    if (isLogin) {
      axios
        .post('/login', { email, password })
        .then(res => {
          this.props.login(res.data.id);
          this.props.history.push('/preference');
        })
        .catch(err => {
          this.setState({
            isError: true,
            errorMessage: err.response.data.message
          });
        });
    } else {
      axios
        .post('/signup', { email, password })
        .then(res => {
          this.setState({ isLogin: true });
        })
        .catch(err => {
          this.setState({
            isError: true,
            errorMessage: err.response.data.message
          });
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

  modalClosed = () => {
    this.setState({ isError: false, errorMessage: '' });
  };

  render() {
    const { isLogin, isError, errorMessage } = this.state;

    const arrayData = signupInput(this.state);

    let input = arrayData.map(item => (
      <Input
        key={item.name}
        inputType={item.inputType}
        type={item.type}
        name={item.name}
        placeholder={item.placeholder}
        value={item.value}
        onChange={this.handleInput}
      />
    ));

    return (
      <Right>
        <Modal show={isError} modalClosed={this.modalClosed}>
          {errorMessage}
        </Modal>
        <Header name={isLogin ? 'Login' : 'Sign up'} />
        <form onSubmit={this.submitHandler}>
          <div className="input-signup">{input}</div>
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
