// Home.jsx
import { Link } from 'react-router-dom';
import '../Style/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-bar">
        <div className="search-bar-container">
          <input type="text" placeholder="Search Jobs" className="search-bar" />
          <i className="search-icon">&#128269;</i>
        </div>
        <div className="header-links">
          <Link to="/jobs" className="nav-link">Jobs</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/companies" className="nav-link">Companies</Link>
        </div>
      </div>
      <div className="header">
        <h1>Welcome to the Job Application Portal</h1>
        <p>Explore job opportunities and take the next step in your career.</p>
      </div>
      {/* Add more content or components as needed */}
    </div>
  );
};

export default Home;
