import React, { Fragment } from 'react';
import Input from '../../components/UI/Input/Input';

const formBuilder = props => {
  let input = null;
  input = props.inputs.map(item => (
    <div className="input-layout" key={item.label}>
      <label>{item.label}</label>
      <div className="desc">{item.caption}</div>
      <div>
        <Input
          {...item}
          onChange={props.onChange}
          onDelete={props.onDelete}
          disabled={props.disabled}
        />
      </div>
    </div>
  ));

  return (
    <div className="desc-box">
      <div className="desc-topic">{props.topic}</div>
      <div>{input}</div>
    </div>
  );
};

export default formBuilder;
