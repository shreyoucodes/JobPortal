// src/components/SelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './SelectionPage.css'; // Import the CSS file for styling

const SelectionPage = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleApplyClick = () => {
    navigate('/home'); // Redirect to the HomePage
  };

  const handleRecruitClick = () => {
    // Add your logic for handling Recruit navigation
    navigate('/recruit'); // Example redirect to a recruit page
  };

  return (
    <div className="selection-page">
      <h1>Connect</h1>
      <div className="options-container">
        <div className="option-box apply-box" onClick={handleApplyClick}>
          <h2>Apply</h2>
          <p>Looking for a job? Start your journey here!</p>
          <button>Explore Jobs</button>
        </div>
        <div className="option-box recruit-box" onClick={handleRecruitClick}>
          <h2>Recruit</h2>
          <p>Looking to hire? Find the best candidates!</p>
          <button>Start Hiring</button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
