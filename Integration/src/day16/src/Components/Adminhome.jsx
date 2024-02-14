// Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Adminhome.css';
import { MdPostAdd } from "react-icons/md";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home-container">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* <Link to="/jobs" className="nav-link">Jobs</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/companies" className="nav-link">Companies</Link> */}

        {/* Job By City Section */}
        <div className="city-section">
        <h3>Menu</h3><Link to="/Feed">
          <h4 className='fd'>Feedback</h4></Link>
          <Link to="/Freejobs">
          <h4>Featured jobs</h4></Link>
          <ul>
            <li><Link to="/jobs/in/india">Featured Jobs</Link></li>
            <li><Link to="/jobs/in/ahmedabad">Recent Job Postings</Link></li>
            <li><Link to="/jobs/in/bangalore">Salary Insights</Link></li>
            <li><Link to="/jobs/in/chennai">Job Categories</Link></li>
            <li><Link to="/jobs/in/delhi-ncr">Job Alerts</Link></li>
            <li><Link to="/jobs/in/hyderabad">Company Spotlight</Link></li>
            <li><Link to="/jobs/in/kolkata">Testimonials</Link></li>
            <li><Link to="/jobs/in/mumbai">Career Resources</Link></li>
            <li><Link to="/jobs/in/pune">Featured Employers</Link></li>
            <li><Link to="/jobs/in/gurgaon">Resume Building Tools</Link></li>
            <li><Link to="/jobs/in/jaipur">Social Media Links</Link></li>
            <li><Link to="/jobs/in/mangalore">Featured Courses</Link></li>
            
           
          </ul>
        </div>
      </div>
      <div className="image-box"></div>      
      <div className="top-bar">
        <div className="toggle-button" onClick={toggleSidebar}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="Search Jobs" className="search-bar" />
          <i className="search-icon">&#128269;</i>
        </div>
        <div className="header-links">
          <Link to="/Jobs" className="nav-link">Add Jobs</Link>
          <Link to="/Feed" className="nav-link">Feeback</Link>
          <Link to="/Categories" className="nav-link">Companies</Link>
        </div>
      </div>
      <div className="header">
        <h1>Welcome to the Job Application Portal</h1>
        <p>Explore job opportunities and take the next step in your career.</p>
      </div>
      <div className="job-cont-boxes">

      <div className="job-cont1-box">
        <h2>Job Posting <MdPostAdd />
</h2><p>Collaborate with cross-functional teams to define, design, and ship new features.</p>
        {/* <p>Exciting opportunity available. </p> */}
        {/* <p>Apply now for this free job posting</p> */}
        {/* <p> and be part of our journey towards success! </p> */}
        <Link to="/Post">
          <button className="apply-button">Click</button></Link>
      </div>
      
       {/* <div className="job-cont2-box">
        <h2>View Jobs</h2> 
         <p>Exclusive career opportunity.</p> 
         <p>Apply now for this premium job posting</p> 
         <p> and unlock a path to unparalleled professional success. </p> 
 <Link to="/Cover">
          <button className="apply-button">Click</button></Link>
      </div>  */}

      {/* <div className="job-cont3-box">
        <h2>Delete Jobs</h2> 
         <p>Exciting opportunity available. </p> 
         <p>Apply now for this free job posting</p> 
         <p> and be part of our journey towards success! </p> 
         <Link to="/Freejobs">
          <button className="apply-button">Click</button></Link> */}

           {/* <div className="job-cont4-box">
        <h2>Edit Jobs</h2>
         <p>Exciting opportunity available. </p> 
         <p>Apply now for this free job posting</p> 
         <p> and be part of our journey towards success! </p> 
         <Link to="/Freejobs">
          <button className="apply-button">Apply</button></Link>   */}

      <div className="footer1">
        <div className="footer-links">
           <Link to="/About">About us</Link> 
          <Link to="/Help">Help Center</Link>
          <Link to="/Report">Report Issue</Link>
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Terms">Terms & Conditions</Link>
        </div>
      </div>
    </div>
    </div>
  //  </div>
  //  </div>

  );
};

export default Home;
