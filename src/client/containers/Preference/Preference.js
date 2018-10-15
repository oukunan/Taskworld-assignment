import React, { Component } from 'react';
import axios from 'axios';

import { AuthConsumer } from '../../context/AuthContext';
import Button from '../../components/UI/Button/Button';

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
      .delete(`http://localhost:8080/preference/${this.props.uid}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="preference">
        <form onSubmit={this.savePreferenceHandler}>
          <h3>Edit preference</h3>

          <div className="desc-box">
            <div className="desc-topic">
              <div>Localization</div>
            </div>
            <div>
              <div className="input-layout">
                <label>Language</label>
                <span className="desc">
                  Interesd in helping translate Fancy? Let us know
                </span>
                <div>
                  <select
                    onChange={this.inputChangedHandler}
                    name="language"
                    value={this.state.language}
                  >
                    <option value="English">English</option>
                    <option value="Thai">Thai</option>
                  </select>
                </div>
              </div>

              <div className="input-layout">
                <label>Time zone</label>
                <div>
                  <select
                    onChange={this.inputChangedHandler}
                    name="timezone"
                    value={this.state.timezone}
                  >
                    <option value="(+00:00)UTC">(+00:00)UTC</option>
                    <option value="(+01:00)UTC">(+01:00)UTC</option>
                  </select>
                </div>
              </div>

              <div className="input-layout">
                <label>Currency</label>
                <div>
                  <select
                    onChange={this.inputChangedHandler}
                    name="currency"
                    value={this.state.currency}
                  >
                    <option value="USD">USD</option>
                    <option value="THB">THB</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="desc-box">
            <div className="desc-topic">
              <div>Privacy</div>
            </div>
            <div>
              <div className="input-layout">
                <label>Profile visibility</label>
                <span className="desc">
                  Manage who can see your activity. things you fancy. your
                  followers, people you follow or in anyone's search results.
                </span>
                <div>
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
              </div>
              <br />
              <div className="input-layout">
                <label>Messages</label>
                <span className="desc">
                  Control who can send your messages.
                </span>
                <div>
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
              </div>
              <br />

              <div className="input-layout">
                <label>Recently viewed</label>
                <span className="desc">Manage your fancy browsing history</span>
                <div>
                  <Button clicked={this.deleteHandler}>Delete all items</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="desc-box">
            <div className="desc-topic">
              <div>Content</div>
            </div>
            <div>
              <div className="input-layout">
                <label>Category lists</label>
                <span className="desc">
                  Automatically and Fancy'd items to the Category list
                </span>
                <div>
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
