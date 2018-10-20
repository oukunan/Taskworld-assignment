import React from 'react';

const child = ({ children, position }) => {
  let attachedClass = [`${position}`];

  return <div className={attachedClass.join(' ')}>{children}</div>;
};

export default child;
