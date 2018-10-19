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
            <span className="radio-label">{radio.value}</span>
          </Fragment>
        );
      });
      break;
    case 'button':
      inputElement = (
        <Button disabled={props.disabled} clicked={props.onDelete}>
          {props.title}
        </Button>
      );
      break;
    default:
      inputElement = (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      );
  }

  return <div>{inputElement}</div>;
};

export default input;
