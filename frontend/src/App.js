// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import SelectionPage from './components/SelectionPage';
import HomePage from './components/HomePage';
import RecruitmentPage from './components/RecruitmentPage'; // Import RecruitmentPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Route for LoginPage */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/select" element={<SelectionPage />} />{' '}
        {/* Route for SelectionPage */}
        <Route path="/home" element={<HomePage />} /> {/* Route for HomePage */}
        <Route path="/recruit" element={<RecruitmentPage />} />{' '}
        {/* Route for RecruitmentPage */}
      </Routes>
    </Router>
  );
};

export default App;
