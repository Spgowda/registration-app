import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the users from the API (JSON server)
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data;

      // Check if the user exists and the password matches
      const user = users.find(
        (user) =>
          user.email === loginInfo.email && user.password === loginInfo.password
      );

      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = '/dashboard';
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '250px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const containerStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;