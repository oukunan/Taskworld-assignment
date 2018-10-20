import React from 'react';

const backdrop = ({ show, clicked }) =>
  show ? <div className="backdrop" onClick={clicked} /> : null;

export default backdrop;
