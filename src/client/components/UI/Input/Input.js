import React, { Fragment } from 'react';
import Button from '../Button/Button';
const input = props => {
  let inputElement = null;

  switch (props.inputType) {
    case 'select':
      inputElement = (
        <select value={props.value} name={props.name} onChange={props.onChange}>
          {props.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.display}
              </option>
            );
          })}
        </select>
      );
      break;
    case 'radio':
      inputElement = props.radios.map(radio => {
        return (
          <Fragment key={radio.value}>
            <input
              type="radio"
              name={radio.name}
              checked={radio.checked}
              value={radio.value}
              onChange={props.onChange}
            />
            {radio.value}
          </Fragment>
        );
      });
      break;
    default:
      inputElement = <Button clicked={props.onDelete}>{props.title}</Button>;
  }

  return <div>{inputElement}</div>;
};

export default input;
