import React, { Component } from 'react';
import axios from '../../axios-order';

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
    category: 'Enable'
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
        console.log(e.response);
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
    axios
      .post('/preference', {
        ...this.state,
        user: {
          uid: this.props.uid
        }
      })
      .then(res => {
        console.log(res.data);
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
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    const data = {
      topic: 'Localization',
      inputs: [
        {
          inputType: 'select',
          caption: 'Interested in helping translate Fancy? Let us know',
          label: 'Language',
          name: 'language',
          value: this.state.language,
          options: [
            {
              value: 'English',
              display: 'English'
            },
            {
              value: 'Thai',
              display: 'THB'
            }
          ]
        },
        {
          inputType: 'select',
          caption: '',
          label: 'Time zone',
          name: 'timezone',
          value: this.state.timezone,
          options: [
            {
              value: '(+00:00)UTC',
              display: '(+00:00)UTC'
            },
            {
              value: '(+01:00)UTC',
              display: '(+01:00)UTC'
            }
          ]
        },
        {
          inputType: 'select',
          caption: '',
          label: 'Currency',
          name: 'currency',
          value: this.state.currency,
          options: [
            {
              value: 'USD',
              display: 'USD'
            },
            {
              value: 'THB',
              display: 'THB'
            }
          ]
        }
      ]
    };

    const data2 = {
      topic: 'Privacy',
      inputs: [
        {
          inputType: 'radio',
          label: 'Profile Visibility',
          caption:
            "Manage who can see your activity. things you fancy. your followers, people you follow or in anyone's search results.",
          radios: [
            {
              name: 'visibility',
              value: 'Everyone',
              checked: this.state.visibility === 'Everyone'
            },
            {
              name: 'visibility',
              value: 'Private',
              checked: this.state.visibility === 'Private'
            }
          ]
        },
        {
          inputType: 'radio',
          label: 'Message',
          caption: 'Control who can send your messages.',
          radios: [
            {
              name: 'message',
              value: 'Everyone',
              checked: this.state.message === 'Everyone'
            },
            {
              name: 'message',
              value: 'People you follow',
              checked: this.state.message === 'People you follow'
            },
            {
              name: 'message',
              value: 'No one',
              checked: this.state.message === 'No one'
            }
          ]
        },
        {
          inputType: 'button',
          label: 'Recently viewed',
          caption: 'Manage your fancy browsing history',
          title: 'Delete all items'
        }
      ]
    };

    const data3 = {
      topic: 'Content',
      inputs: [
        {
          inputType: 'radio',
          label: 'Category lists',
          caption: "Automatically and Fancy'd items to the Category list",
          radios: [
            {
              name: 'category',
              value: 'Enable',
              checked: this.state.category === 'Enable'
            },
            {
              name: 'category',
              value: 'Disable',
              checked: this.state.category === 'Disable'
            }
          ]
        }
      ]
    };
    return (
      <Right>
        <form onSubmit={this.savePreferenceHandler}>
          <Header name="Edit preference" />
          <FormBuilder {...data} onChange={this.inputChangedHandler} />
          <FormBuilder
            {...data2}
            onChange={this.inputChangedHandler}
            clicked={this.deleteHandler}
          />
          <FormBuilder {...data3} onChange={this.inputChangedHandler} />

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
