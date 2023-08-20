import React from 'react';

function Card({ children }) {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      {children}
    </div>
  );
}

export default Card;
