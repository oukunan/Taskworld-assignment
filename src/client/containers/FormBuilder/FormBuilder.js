import React, { Fragment } from 'react';
import Input from '../../components/UI/Input/Input';

const formBuilder = ({ inputs, onChange, onDelete, disabled, topic }) => {
  let input = null;
  input = inputs.map(item => (
    <div className="input-layout" key={item.label}>
      <label>{item.label}</label>
      <div className="desc">{item.caption}</div>
      <div>
        <Input
          {...item}
          onChange={onChange}
          onDelete={onDelete}
          disabled={disabled}
        />
      </div>
    </div>
  ));

  return (
    <div className="desc-box">
      <div className="desc-topic">{topic}</div>
      <div>{input}</div>
    </div>
  );
};

export default formBuilder;
