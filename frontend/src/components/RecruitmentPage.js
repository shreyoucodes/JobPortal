// src/components/RecruitmentPage.js
import React, { useState } from 'react';
import './RecruitmentPage.css'; // Import the CSS file for styling

const RecruitmentPage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server or store locally)
    console.log('Job Title:', jobTitle);
    console.log('Job Description:', jobDescription);
    console.log('Location:', location);

    // Clear the form fields after submission
    setJobTitle('');
    setJobDescription('');
    setLocation('');
  };

  return (
    <div className="recruitment-page">
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit} className="recruitment-form">
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            required
          />
        </div>

        <div className="form-group">
          <label>Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter job description"
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter job location"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Post Job</button>
      </form>
    </div>
  );
};

export default RecruitmentPage;
