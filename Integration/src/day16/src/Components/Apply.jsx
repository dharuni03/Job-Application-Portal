import React from 'react';
import axios from 'axios';
import '../Style/Apply.css';

class Apply extends React.Component {
  render() {
    return <RegistrationForm />;
  }
}
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      dob: '',
      gender: '',
      address: '',
      mobileno: '',
      education: '',
      workExperience: '',
      skills: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/userside',
        this.state,
        { headers: { "Authorization": `Bearer ${token}` } }
      );

      console.log('Form submitted:', response.data);
      this.setState({
        name: '',
        email: '',
        dob: '',
        gender: '',
        address: '',
        mobileno: '',
        education: '',
        workexperience: '',
        skills: ''
      });
    } catch (error) {
      console.error('Form submission failed:', error.message);
    }
  };

  render() {
    return (
      <div className="ap-bg">
        <div className="ap-fc">
          <form className="ap-f" onSubmit={this.handleSubmit}>
            <fieldset>
              <h1>Application Form</h1>
              <div className="ap-fn">
                <input
                  type="text"
                  name="name"
                  className="ap-fn"
                  placeholder="Enter the Full Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                className="ap-em"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                name="dob"
                className="ap-dob"
                placeholder="Date of Birth"
                value={this.state.dob}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                name="gender"
                className="ap-gender"
                placeholder="Gender"
                value={this.state.gender}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                name="address"
                className="ap-ad"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleChange}
                required
              />
              <input
                type="tel"
                name="mobileno"
                className="ap-ph"
                placeholder="Mobile Number"
                value={this.state.mobileno}
                onChange={this.handleChange}
                required
              />

              <input
                type="text"
                name="education"
                className="ap-edu"
                placeholder="Education"
                value={this.state.education}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                name="workexperience"
                className="ap-aadhar"
                placeholder="Work Experience"
                value={this.state.workexperience}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                name="skills"
                className="ap-aadhar"
                placeholder="Skills"
                value={this.state.skills}
                onChange={this.handleChange}
                required
              />
              <br />
              <br />
              <br />
              <br />
              <input type="submit" name="submit" className="ap-su" />
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Apply;
