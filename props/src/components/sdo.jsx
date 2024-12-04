import React from 'react';

const Sdo = ({ stats }) => {
  return (
    <div className="sdo-container">
      <div className="sdo-item">
        <h3>Total Users</h3>
        <p>{stats.totalUser}</p>
      </div>
      <div className="sdo-item">
        <h3>Active Users</h3>
        <p>{stats.activeUser}</p>
      </div>
      <div className="sdo-item">
        <h3>New Signups</h3>
        <p>{stats.newSignups}</p>
      </div>
      <div className="sdo-item">
        <h3>Active %</h3>
        <p>{stats.acttivePercentage}</p>
      </div>
    </div>
  );
};

export default Sdo;
