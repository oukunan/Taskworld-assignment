import React, { Component } from 'react';

import { preferenceInputs } from '../../data/data';
import axios from '../../axios-preference';
import { AuthConsumer } from '../../context/AuthContext';
import FormBuilder from '../../containers/FormBuilder/FormBuilder';
import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Right from '../../components/Right/Right';

class Preference extends Component {
  state = {
    language: 'English',
    timezone: '+00:00)UTC',
    currency: 'USD',
    visibility: 'Everyone',
    message: 'Everyone',
    category: 'Enable',
    isDisable: false
  };

  componentDidMount() {
    axios
      .get(`/preference/${this.props.uid}`)
      .then(res => {
        const {
          language,
          timezone,
          currency,
          visibility,
          message,
          category
        } = res.data.item;
        this.setState({
          language,
          timezone,
          currency,
          visibility,
          message,
          category
        });
      })
      .catch(e => {
        this.setState({ isDisable: true });
      });
  }

  inputChangedHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  savePreferenceHandler = e => {
    e.preventDefault();
    const {
      language,
      currency,
      timezone,
      visibility,
      message,
      category
    } = this.state;
    axios
      .post('/preference', {
        language,
        timezone,
        currency,
        visibility,
        message,
        category,
        user: {
          uid: this.props.uid
        }
      })
      .then(res => {
        this.setState({ isDisable: false });
      })
      .catch(e => {
        console.log(e);
      });
  };

  deleteHandler = e => {
    e.preventDefault();
    axios
      .delete(`preference/${this.props.uid}`)
      .then(res => {
        this.setState({ isDisable: true });
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    const arrayData = preferenceInputs(this.state);

    let formBuilds = null;
    formBuilds = arrayData.map((data, i) => (
      <FormBuilder
        key={i}
        {...data.data}
        onChange={this.inputChangedHandler}
        onDelete={this.deleteHandler}
        disabled={this.state.isDisable}
      />
    ));

    return (
      <Right>
        <form onSubmit={this.savePreferenceHandler}>
          <Header name="Edit preference" />
          {formBuilds}
          <Button>Save preference</Button>
        </form>
      </Right>
    );
  }
}

export default props => (
  <AuthConsumer>
    {({ uid }) => {
      return <Preference {...props} uid={uid} />;
    }}
  </AuthConsumer>
);
