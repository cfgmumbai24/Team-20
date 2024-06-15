import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:4000/api/user/getallUsers";
    axios.get(url)
      .then(result => setData(result.data)) // Accessing result.data
      .catch(error => alert("Issue " + error));
  }, []);

  return (
    <div>
      <center>
      <h2>Users Details</h2>
      {
        Array.isArray(data) && data.length > 0 ? (
          <table style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", border: "1px solid black" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Location</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>FullName</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Gender</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Phone</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>DOB</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{e.email}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{e.location}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{e.fullname}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{e.gender}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{e.phone}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{e.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )
      }
      </center>
    </div>
  );
};

export default Admin;
