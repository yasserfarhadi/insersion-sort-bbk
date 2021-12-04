import React from 'react';

function Input({ label, placeholder, changed, type, value }) {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        placeholder={placeholder}
        onChange={changed}
        value={value}
        type={type ? type : 'text'}
      />
    </div>
  );
}

export default Input;
