import React from 'react';

const Mdo = ({ message }) => {
  return (
    <div className="mdo-container">
      <p>{message.message1}</p>
      <p>{message.message2}</p>
      <p>{message.message3}</p>
    </div>
  );
};

export default Mdo;
