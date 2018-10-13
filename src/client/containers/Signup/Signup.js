import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../components/UI/Button/Button';

class Signup extends Component {
  state = {
    email: '',
    password: ''
  };

  signupHandler = e => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/signup', this.state)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.signupHandler}>
          <input type="email" name="email" onChange={this.handleInput} />
          <input type="password" name="password" onChange={this.handleInput} />
          <Button>Login</Button>
        </form>
      </div>
    );
  }
}

export default Signup;
