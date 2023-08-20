import React from 'react';

function Button({ children, type, onClick, className }) {
  return (
    <button
      className={`py-2 px-4 rounded ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
