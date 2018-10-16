import React, { Component } from 'react';
import axios from '../../axios-order';

import { AuthConsumer } from '../../context/AuthContext';

import Header from '../../components/UI/Header/Header';
import Label from '../../components/UI/Label/Label';
import Button from '../../components/UI/Button/Button';
import DescBox from '../../components/DescBox/DescBox';
import DescTopic from '../../components/DescTopic/DescTopic';
import Caption from '../../components/Caption/Caption';
import InputLayout from '../../components/InputLayout/InputLayout';
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
    return (
      <Right>
        <form onSubmit={this.savePreferenceHandler}>
          <Header name="Edit preference" />

          <DescBox>
            <DescTopic title="Localization" />
            <div>
              <InputLayout>
                <Label label="Language" />
                <Caption>
                  Interesd in helping translate Fancy? Let us know
                </Caption>
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
              </InputLayout>

              <div className="input-layout">
                <Label label="Time zone" />
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
                <Label label="Currency" />
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
          </DescBox>

          <DescBox>
            <DescTopic title="Privacy" />
            <div>
              <InputLayout>
                <label>Profile visibility</label>
                <Caption>
                  Manage who can see your activity. things you fancy. your
                  followers, people you follow or in anyone's search results.
                </Caption>

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
              </InputLayout>

              <InputLayout>
                <Label label="Message" />
                <Caption>Control who can send your messages.</Caption>

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
              </InputLayout>

              <InputLayout>
                <Label label="Recently viewed" />
                <Caption>Manage your fancy browsing history</Caption>
                <div>
                  <Button clicked={this.deleteHandler}>Delete all items</Button>
                </div>
              </InputLayout>
            </div>
          </DescBox>

          <DescBox>
            <DescTopic title="Content" />
            <div>
              <InputLayout>
                <Label label="Category lists" />

                <Caption>
                  Automatically and Fancy'd items to the Category list
                </Caption>

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
              </InputLayout>
            </div>
          </DescBox>
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
