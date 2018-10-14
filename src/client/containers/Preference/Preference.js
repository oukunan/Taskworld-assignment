import React, { Component } from 'react';
import axios from 'axios';

import { AuthConsumer } from '../../context/AuthContext';
import Button from '../../components/UI/Button/Button';

class Preference extends Component {
  state = {
    language: '',
    timezone: '',
    currency: '',
    visibility: '',
    message: '',
    category: ''
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/preference/${this.props.uid}`)
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
      .post('http://localhost:8080/preference', {
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
      .delete(`http://localhost:8080/preference/`, {
        data: { uid: this.props.uid }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.savePreferenceHandler}>
          <div>
            <h3>Edit preference</h3>
            <h5>Localization</h5>
            <label>Language</label>
            <select
              onChange={this.inputChangedHandler}
              name="language"
              value={this.state.language}
            >
              <option value="English">English</option>
              <option value="Thai">Thai</option>
            </select>

            <label>Time zone</label>
            <select
              onChange={this.inputChangedHandler}
              name="timezone"
              value={this.state.timezone}
            >
              <option value="(+00:00)UTC">(+00:00)UTC</option>
              <option value="(+01:00)UTC">(+01:00)UTC</option>
            </select>

            <label>Currency</label>
            <select
              onChange={this.inputChangedHandler}
              name="currency"
              value={this.state.currency}
            >
              <option value="USD">USD</option>
              <option value="THB">THB</option>
            </select>
          </div>
          <div>
            <h5>Privacy</h5>
            <div>
              <label>Profile visibility</label>
              <input
                type="radio"
                name="visibility"
                value="Everyone"
                checked={this.state.visibility === 'Everyone'}
                onChange={this.inputChangedHandler}
              />{' '}
              Everyone
              <input
                type="radio"
                name="visibility"
                value="Private"
                checked={this.state.visibility === 'Private'}
                onChange={this.inputChangedHandler}
              />{' '}
              Private
            </div>
            <br />
            <div>
              <label>Messages</label>
              <input
                type="radio"
                name="message"
                value="Everyone"
                checked={this.state.message === 'Everyone'}
                onChange={this.inputChangedHandler}
              />{' '}
              Everyone
              <input
                type="radio"
                name="message"
                value="People you follow"
                checked={this.state.message === 'People you follow'}
                onChange={this.inputChangedHandler}
              />{' '}
              people you follow
              <input
                type="radio"
                name="message"
                value="No one"
                checked={this.state.message === 'No one'}
                onChange={this.inputChangedHandler}
              />{' '}
              No one
            </div>
            <br />

            <div>
              <label>Recently viewed</label>
              <Button clicked={this.deleteHandler}>Delete all items</Button>
            </div>
          </div>
          <div>
            <h5>Content</h5>
            <div>
              <label>Category lists</label>
              <input
                type="radio"
                name="category"
                value="Enable"
                checked={this.state.category === 'Enable'}
                onChange={this.inputChangedHandler}
              />{' '}
              Enable
              <input
                type="radio"
                name="category"
                value="Disable"
                checked={this.state.category === 'Disable'}
                onChange={this.inputChangedHandler}
              />{' '}
              Disable
            </div>
          </div>
          <Button>Save preference</Button>
        </form>
      </div>
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
