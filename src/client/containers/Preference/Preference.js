import React, { Component } from 'react';

import { preferenceInputs } from '../../data/data';
import axios from '../../axios-preference';
import { AuthConsumer } from '../../context/AuthContext';
import FormBuilder from '../../containers/FormBuilder/FormBuilder';
import Child from '../../components//Child/Child';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';

class Preference extends Component {
  state = {
    language: 'English',
    timezone: '+00:00)UTC',
    currency: 'USD',
    visibility: 'Everyone',
    message: 'Everyone',
    category: 'Enable',
    isDisable: false,
    isShow: '',
    messageModal: ''
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
        this.setState({
          isDisable: false,
          isShow: true,
          messageModal: 'Save preference successful.'
        });
      })
      .catch(e => {
        this.setState({
          isShow: true,
          messageModal: 'Something went wrong.'
        });
      });
  };

  deleteHandler = e => {
    e.preventDefault();
    axios
      .delete(`preference/${this.props.uid}`)
      .then(res => {
        this.setState({
          isDisable: true,
          isShow: true,
          messageModal: 'Delete successful.'
        });
      })
      .catch(e => {
        this.setState({
          isShow: true,
          message: 'Something went wrong.'
        });
      });
  };

  modalClosed = () => {
    this.setState({ isShow: false, messageModal: '' });
  };

  render() {
    const { isShow, messageModal } = this.state;
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
      <Child position="right">
        <Modal show={isShow} modalClosed={this.modalClosed}>
          {messageModal}
        </Modal>
        <form onSubmit={this.savePreferenceHandler}>
          <Header name="Edit preference" />
          {formBuilds}
          <Button>Save preference</Button>
        </form>
      </Child>
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
