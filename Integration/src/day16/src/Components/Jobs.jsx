// import { useState } from 'react';
// import axios from 'axios';
// // import '../Style/Addjobs.css';

// const AddJobs = () => {
//   const [formData, setFormData] = useState({
//     jobName: '',
//     jobLocation: '',
//     jobType: '',
//     startDate: '',
//     endDate: '',
//     salary: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found');
//       }
//       console.log('Token:', token); // Log token for debugging
//       const response = await axios.post("http://localhost:8080/services", formData, {
//         headers: {
//           Authorization: `Bearer ${token}` // Corrected the syntax here
//         }
//       });
//       console.log("Job added successfully!", response.data);
//       setFormData({
//         jobName: '',
//         jobLocation: '',
//         jobType: '',
//         startDate: '',
//         endDate: '',
//         salary: ''
//       });
//     } catch (error) {
//       console.error('Error adding job:', error);
//     }
//   };

//   return (
//     <div className="itsyou">
//       <div className="eyeyou">
//         <div className="add-jobs-container">
//           <h2 className="tit">Add New Job</h2>
//           <form className="add-job-form" onSubmit={handleSubmit}>
//             <div className="form-group job-title-group">
//               <label htmlFor="jobName">Job Name</label>
//               <input
//                 type="text"
//                 id="jobName"
//                 className="job-title-input"
//                 name="jobName"
//                 value={formData.jobName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group job-location-group">
//               <label htmlFor="jobLocation">Job Location:</label>
//               <input
//                 type="text"
//                 id="jobLocation"
//                 className="job-location-input"
//                 name="jobLocation"
//                 value={formData.jobLocation}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group job-type-group">
//               <label htmlFor="jobType">Job Type:</label>
//               <input
//                 type="text"
//                 id="jobType"
//                 className="job-location-input"
//                 name="jobType"
//                 value={formData.jobType}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group job-applied-group">
//               <label htmlFor="startDate">Start Date:</label> {/* Changed from jobApplied to startDate */}
//               <input
//                 type="text"
//                 id="startDate"
//                 className="job-applied-input"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group job-confirmation-group">
//               <label htmlFor="endDate">End Date:</label> {/* Changed from jobConfirmation to endDate */}
//               <input
//                 type="text"
//                 id="endDate"
//                 className="job-confirmation-input"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group job-salary-group">
//               <label htmlFor="salary">Salary:</label> {/* Changed from jobSalary to salary */}
//               <input
//                 type="text"
//                 id="salary"
//                 className="job-salary-input"
//                 name="salary"
//                 value={formData.salary}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="submit-button add-job-submit">Add Job</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddJobs;
import { useState } from 'react';
import axios from 'axios';


const getToken = () => {
  return localStorage.getItem('token');
};

const AddJobs = () => {
  const [formData, setFormData] = useState({
    jobName: '',
    jobLocation: '',
    jobType: '',
    startDate: '',
    endDate: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No token found');
      }
      console.log('Token:', token); // Log token for debugging
      const response = await axios.post("http://localhost:8080/services", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Job added successfully!", response.data);
      setFormData({
        jobName: '',
        jobLocation: '',
        jobType: '',
        startDate: '',
        endDate: '',
        salary: ''
      });
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <div className="itsyou">
      <div className="eyeyou">
        <div className="add-jobs-container">
          <h2 className="tit">Add New Job</h2>
          <form className="add-job-form" onSubmit={handleSubmit}>
            <div className="form-group job-title-group">
              <label htmlFor="jobName">Job Name</label>
              <input
                type="text"
                id="jobName"
                className="job-title-input"
                name="jobName"
                value={formData.jobName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group job-location-group">
              <label htmlFor="jobLocation">Job Location:</label>
              <input
                type="text"
                id="jobLocation"
                className="job-location-input"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group job-type-group">
              <label htmlFor="jobType">Job Type:</label>
              <input
                type="text"
                id="jobType"
                className="job-location-input"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group job-applied-group">
              <label htmlFor="startDate">Start Date:</label> 
              <input
                type="text"
                id="startDate"
                className="job-applied-input"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group job-confirmation-group">
              <label htmlFor="endDate">End Date:</label> 
              <input
                type="text"
                id="endDate"
                className="job-confirmation-input"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group job-salary-group">
              <label htmlFor="salary">Salary:</label> 
              <input
                type="text"
                id="salary"
                className="job-salary-input"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button add-job-submit">Add Job</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
