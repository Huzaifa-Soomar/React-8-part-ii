import React from 'react';

const Udo = ({ user }) => {
  return (
    <div className="udo-container">
      <img
        src={user.pic}
        alt={`${user.name}'s Profile`}
        className="pic"
      />
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
    </div>
  );
};

export default Udo;
