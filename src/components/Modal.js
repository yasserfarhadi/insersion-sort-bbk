import React from 'react';

function Modal({ clicked }) {
  return (
    <div className="back-drop">
      <div className="box"></div>
      <div onClick={clicked} className="close"></div>
    </div>
  );
}

export default Modal;
