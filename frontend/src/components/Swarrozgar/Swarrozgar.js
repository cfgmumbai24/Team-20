import React from 'react';
import './Swarrozgar.css';


const Swarozgar = () => {
  const fundRequests = [
    { id: 1, name: 'Customer 1', amount: 5000, profileLink: '#' },
    { id: 2, name: 'Customer 2', amount: 3000, profileLink: '#' },
  ];

  const mentorRequests = [
    { id: 1, name: 'Customer A', description: 'Looking for guidance in agriculture', profileLink: '#' },
    { id: 2, name: 'Customer B', description: 'Needs mentoring in finance management', profileLink: '#' },
  ];

  return (
    <div className="app">
      <h1>Swarrozgar</h1>
      <div className="panels">
        <div className="panel">
          <h2>Fund Request</h2>
          {fundRequests.map(request => (
            <div key={request.id} className="fund-request">
              <p><strong>{request.name}</strong></p>
              <p>Amount Raised: {request.amount}</p>
              <a href={request.profileLink}>Profile</a>
              <div className="buttons">
                <button className="accept">Accept</button>
                <button className="reject">Reject</button>
              </div>
            </div>
          ))}
        </div>
        <div className="panel">
          <h2>Mentor Request</h2>
          {mentorRequests.map(request => (
            <div key={request.id} className="mentor-request">
              <p><strong>{request.name}</strong></p>
              <p>{request.description}</p>
              <a href={request.profileLink}>Profile</a>
              <div className="buttons">
                <button className="accept">Accept</button>
                <button className="reject">Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Swarozgar;
