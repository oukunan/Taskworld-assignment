import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

const modal = ({ show, modalClosed, children }) => {
  return (
    <div>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default modal;
