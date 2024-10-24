import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      window.location.href = '/login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = '/login';
  };

  const dashboardStyle = {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const headingStyle = {
    color: '#343a40',
  };

  const textStyle = {
    color: '#6c757d',
    fontSize: '18px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  };

  if (!user) {
    return null;
  }

  return (
    <div style={dashboardStyle}>
      <h2 style={headingStyle}>Dashboard</h2>
      <p style={textStyle}>Welcome, {user.name}</p>
      <p style={textStyle}>Email: {user.email}</p>
      <button style={buttonStyle} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;