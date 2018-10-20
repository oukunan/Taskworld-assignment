import React from 'react';

const button = ({ disabled, clicked, children }) => (
  <button disabled={disabled} className="btn" onClick={clicked}>
    {children}
  </button>
);

export default button;
