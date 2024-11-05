// src/components/HomePage.js
import React, { useState } from 'react';
import './HomePage.css'; // Import CSS file

const jobsData = [
  { title: 'Software Engineer', company: 'TechCorp', location: 'New York, NY' },
  {
    title: 'Data Scientist',
    company: 'DataCorp',
    location: 'San Francisco, CA',
  },
  {
    title: 'Project Manager',
    company: 'BuildTech',
    location: 'Los Angeles, CA',
  },
  { title: 'UX Designer', company: 'DesignPro', location: 'Seattle, WA' },
  {
    title: 'Marketing Specialist',
    company: 'MarketGen',
    location: 'Chicago, IL',
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = jobsData.filter((job) =>
      job.title.toLowerCase().includes(value)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="homepage">
      {/* Company Heading */}
      <header className="company-header">
        <h1>JobPortal</h1>
        <p>Your gateway to the best jobs around the world</p>
      </header>

      {/* Search Bar */}
      <section className="job-search">
        <h2>Find Your Dream Job</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Enter job title..."
        />

        {/* Job Search Results */}
        <div className="search-results">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div className="job-item" key={index}>
                <h3>{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
