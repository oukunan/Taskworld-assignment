import React, { Fragment } from 'react';

import DescBox from '../../components/DescBox/DescBox';
import DescTopic from '../../components/DescTopic/DescTopic';
import InputLayout from '../../components/InputLayout/InputLayout';
import Label from '../../components/UI/Label/Label';
import Caption from '../../components/Caption/Caption';
import Button from '../../components/UI/Button/Button';

const formBuilder = props => {
  let input = null;
  input = props.inputs.map(item => (
    <InputLayout key={item.label}>
      <Label label={item.label} />
      <Caption caption={item.caption} />

      <div>
        {item.inputType === 'select' ? (
          <select value={item.value} name={item.name} onChange={props.onChange}>
            {item.options.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.display}
                </option>
              );
            })}
          </select>
        ) : item.inputType === 'radio' ? (
          item.radios.map(radio => {
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
          })
        ) : (
          <Button clicked={props.deleteHandler}>{item.title}</Button>
        )}
      </div>
    </InputLayout>
  ));

  return (
    <DescBox>
      <DescTopic title={props.topic} />
      <div>{input}</div>
    </DescBox>
  );
};

export default formBuilder;
