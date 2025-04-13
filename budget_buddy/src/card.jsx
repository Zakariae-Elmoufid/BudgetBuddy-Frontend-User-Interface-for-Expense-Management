import React from 'react';
function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h2>{title}</h2>
      <h1>{children}</h1>
    </div>
  );
}

export default Card;
