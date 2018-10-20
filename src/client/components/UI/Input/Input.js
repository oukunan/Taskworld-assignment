import React, { Fragment } from 'react';
import Button from '../Button/Button';
const input = ({
  inputType,
  value,
  name,
  onChange,
  options,
  radios,
  disabled,
  onDelete,
  title,
  type,
  placeholder
}) => {
  let inputElement = null;

  switch (inputType) {
    case 'select':
      inputElement = (
        <select value={value} name={name} onChange={onChange}>
          {options.map(option => {
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
      inputElement = radios.map(radio => {
        return (
          <Fragment key={radio.value}>
            <input
              type="radio"
              name={radio.name}
              checked={radio.checked}
              value={radio.value}
              onChange={onChange}
            />
            <span className="radio-label">{radio.value}</span>
          </Fragment>
        );
      });
      break;
    case 'button':
      inputElement = (
        <Button disabled={disabled} clicked={onDelete}>
          {title}
        </Button>
      );
      break;
    default:
      inputElement = (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
  }

  return <div>{inputElement}</div>;
};

export default input;
