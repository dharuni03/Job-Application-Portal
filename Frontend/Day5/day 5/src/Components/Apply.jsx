// Apply.jsx

import React from 'react';
import '../Style/Apply.css';

class Apply extends React.Component {
  render() {
    return (
      <RegistrationForm />
    );
  }
}

class RegistrationForm extends React.Component {
  render() {
    return (<div className="ap-bg">
      <div className="ap-fc">
        <form className="ap-f" action="#" method="POST">
          <fieldset>
            <h1>Application Form</h1>
            <div className="ap-fn">
              <input type="text" name="fName" className="ap-fn" placeholder="First Name" required />
              <input type="text" name="lName" className="ap-ln" placeholder="Last Name" required />
            </div>
            <div className="ap-oi">
              <input type="date" name="dob" className="ap-dob" placeholder="Date of Birth" required />
              <select name="gender" className="ap-gender" required>
                <option value="" disabled selected hidden>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="text" name="address" className="ap-ad" placeholder="Address" required />
              <input type="tel" name="phone" className="ap-ph" placeholder="Telephone Number" required />
              <input type="email" name="email" className="ap-em" placeholder="Email Address" required />
              <input type="text" name="education" className="ap-edu" placeholder="Education" required />
              <input type="text" name="aadhar" className="ap-aadhar" placeholder="Aadhar Number" required />
            </div>
            <br /><br />
            <input type="submit" name="submit" className="ap-su" />
          </fieldset>
        </form>
      </div>
      </div>
    );
  }
}

export default Apply;
