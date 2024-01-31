// Home.jsx
import  { useState } from 'react';
import '../Style/Home.css';

const Home = () => {
  const [showSidePanel, setShowSidePanel] = useState(true);

  const toggleSidePanel = () => {
    setShowSidePanel(!showSidePanel);
  };

  return (
    <div className="home-container">
      <button onClick={toggleSidePanel}>Toggle Sidebar</button>
      <div className={`side-panel ${showSidePanel ? 'open' : ''}`}>
        <h2>Sidebar Menu</h2>
        <ul className="sidebar-menu">
          <li>Recommended Jobs</li>
          <li>Job Invites</li>
          <li>Jobs from Alerts</li>
          <li>Application Status</li>
          <li>Saved Jobs</li>
        </ul>
      </div>
      <div className="header">
        <div className="header-links">
          <span>Jobs</span>
          <span>Services</span>
          <span>Companies</span>
        </div>
        <h1>Welcome to the Job Application Portal</h1>
        <p>Explore job opportunities and take the next step in your career.</p>
      </div>
      {/* Add more content or components as needed */}
    </div>
  );
};

export default Home;
