import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // LoginPage.js
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('http://localhost:3000/login', {
        email,
        password,
      });
      navigate('/select');
    } catch (error) {
      console.error(
        'Error logging in:',
        error.response ? error.response.data : error.message
      );
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password');
      } else if (error.response && error.response.status === 403) {
        alert('Your account is currently inactive');
      } else {
        alert('An error occurred during login. Please try again later.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="login-banner">Connect</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p
          style={{
            cursor: 'pointer',
            color: 'black',
            marginTop: '10px',
            font: 'Arial, sans-serif',
            fontSize: '12px',
          }}
          onClick={() => navigate('/signup')}
        >
          Sign up if not a user
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
