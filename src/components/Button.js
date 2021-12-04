import React from 'react';

function Button({ text, click }) {
  return (
    <div className="button">
      <button onClick={click}>{text}</button>
    </div>
  );
}

export default Button;
