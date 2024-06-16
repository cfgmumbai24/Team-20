import React from 'react';

const FundRequests = () => {
  const dummyData = [
    {
      fullName: 'John Doe',
      description: 'Fund for medical expenses',
      amount: 10000,
      status: 'Approved'
    },
    {
      fullName: 'Jane Smith',
      description: 'Fund for education',
      amount: 5000,
      status: 'Pending'
    },
    {
      fullName: 'Sam Johnson',
      description: 'Fund for new startup',
      amount: 15000,
      status: 'Rejected'
    },
    {
      fullName: 'Alice Brown',
      description: 'Fund for community project',
      amount: 20000,
      status: 'Approved'
    },
    {
        fullName: 'Ali Bron',
        description: 'Fund for social cause',
        amount: 25000,
        status: 'Approved'
      },
      {
        fullName: 'Clan Ron',
        description: 'Fund for Investment',
        amount: 30000,
        status: 'Rejected'
      },
      {
        fullName: 'Fran Ion',
        description: 'Fund for medical cause',
        amount: 35000,
        status: 'Rejected'
      },
  ];

  return (
    <div>
        <center>
      <h2>Fund Requests</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Full Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Amount</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((request, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{request.fullName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{request.description}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{request.amount}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  );
};

export default FundRequests;
