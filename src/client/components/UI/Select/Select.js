import React from 'react';

const select = props => {
  return (
    <select onChange={props.onChange} name={props.name} value={props.value}>
      <option key={props.value} value={props.value}>
        {props.value}
      </option>
    </select>
  );
};

export default select;
