import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';

class Preference extends Component {
  state = {
    preferenceForm: {
      Language: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'English', displayValue: 'English' },
            { value: 'Thai', displayValue: 'Thai' }
          ]
        },
        value: 'English'
      },
      'Time Zone': {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'English', displayValue: 'English' },
            { value: 'Thai', displayValue: 'Thai' }
          ]
        },
        value: 'English'
      },
      Currency: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'USD', displayValue: 'USD' },
            { value: 'THB', displayValue: 'THB' }
          ]
        },
        value: 'English'
      }
    }
  };
  render() {
    const formArray = [];
    for (let key in this.state.preferenceForm) {
      formArray.push({
        id: key,
        config: this.state.preferenceForm[key]
      });
    }

    let form = (
      <form>
        {formArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.id}
          />
        ))}
      </form>
    );

    return <div>{form}</div>;
  }
}

export default Preference;
