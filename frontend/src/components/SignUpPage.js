// SignUpPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './SignUpPage.css';

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [userType, setUserType] = useState('JOB_SEEKER');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('http://localhost:3000/signup', {
        first_name: firstName,
        last_name: lastName,
        email,
        // user_type: userType,
        location,
        password,
      });

      alert(response.data.message);
      navigate('/select'); // Redirect to SelectionPage
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again later.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        <div className="signup-banner">Join Us</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="JOB_SEEKER">Job Seeker</option>
            <option value="JOB_PROVIDER">Job Provider</option>
          </select> */}
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
