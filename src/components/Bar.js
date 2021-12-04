import React from 'react';

function Bar({ percent, bg }) {
  return (
    <div
      className="bar"
      style={{ height: percent + '%', backgroundColor: `${bg}` }}
    ></div>
  );
}

export default Bar;
