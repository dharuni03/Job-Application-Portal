import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/Change.css';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const response = await axios.get("http://localhost:8080/api/v1/auth", {
          headers: {
            "Authorization": `Bearer ${token}`, 
            "cache-control": "no-cache", 
          }
        });
        
        setAppliedJobs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="appliedtotal">
      <div className="applied-jobs-container">
        <h1 className="page-title">Applied Jobs</h1>
        <div className="job-list">
          {appliedJobs.map(job => (
            <div key={job.id} className="job-card">
              <h2 className="job-title">{job.name}</h2>
              <p className="job-email">Email: {job.email}</p>
              <p className="job-dob">Date of Birth: {job.dob}</p>
              <p className="job-gender">Gender: {job.gender}</p>
              <p className="job-address">Address: {job.address}</p>
              <p className="job-mobileno">Mobile No: {job.mobileno}</p>
              <p className="job-education">Education: {job.education}</p>
              <p className="job-workexperience">Work Experience: {job.workexperience}</p>
              <p className="job-skills">Skills: {job.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
