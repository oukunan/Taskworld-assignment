import React from 'react';

const subLayout = props => {
  let attachedClass = ['sub-layout', `${props.child}`];

  return <div className={attachedClass.join(' ')}>{props.children}</div>;
};

export default subLayout;
