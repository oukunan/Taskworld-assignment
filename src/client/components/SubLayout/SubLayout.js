import React from 'react';

const subLayout = ({ children, child }) => {
  let attachedClass = ['sub-layout', `${child}`];

  return <div className={attachedClass.join(' ')}>{children}</div>;
};

export default subLayout;
