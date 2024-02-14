import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cp from '../assets/cp.png';
import '../Style/Login.css';

const Login1 = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: formData.email,
        password: formData.password
      });
      console.log(response.data);
      // const {token} =response.data;

      localStorage.setItem('token', response.data.token);
      navigate('/Home');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const requestData = {
        name: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      };

      const response = await axios.post('http://localhost:8080/api/v1/auth/register', requestData);
      console.log(response.data);
      navigate('/Home');
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Error signing up. Please try again later.');
    }
  };

  const inputStyle = {
    background: 'var(--pale)',
    width: '65%',
    color: 'white',
    padding: '9px',
  };

  const buttonStyle = {
    backgroundColor: '#34b5dd',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div className="cn">
      <div className="wc">
        <div className="pb" style={{ transform: showSignUp ? 'translateX(80%)' : 'translateX(0%)' }}>
          <div className={showSignUp ? 'sgn nodisplay' : 'sgn'}>
            <h1 className='po'>sign in</h1>
            <form onSubmit={handleLogin} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '17px', marginTop: '40px' }} className="mp your-signin-form-class" autoComplete="off">
              <input type="email" placeholder="email" style={inputStyle} name="email" value={formData.email} onChange={handleChange} />
              <input type="password" placeholder="password" style={inputStyle} name="password" value={formData.password} onChange={handleChange} />
              <button className="bt sbmt" style={buttonStyle}>login</button>
            </form>
          </div>
          <div className={showSignUp ? 'sgn' : 'sgn nodisplay'}>
            <h1 className='po'>register</h1>
            <form onSubmit={handleSignUp} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '17px', marginTop: '40px' }} className="your-signup-form-class" autoComplete="off">
              <input type="text" placeholder="username" style={inputStyle} name="username" value={formData.username} onChange={handleChange} />
              <input type="email" placeholder="email" style={inputStyle} name="email" value={formData.email} onChange={handleChange} />
              <input type="password" placeholder="password" style={inputStyle} name="password" value={formData.password} onChange={handleChange} />
              <input type="password" placeholder="confirm password" style={inputStyle} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              <button className="bt sbmt" style={buttonStyle}>sign Up</button>
            </form>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="lb">
          <img src={cp} alt="Logo" style={{ width: '110%', height: '300px', objectFit: 'cover', marginLeft: '-20px', borderRadius: '16px' }} />
          <p className="acnt">have an account?</p>
          <button className="bt" style={buttonStyle} onClick={handleSignInClick} id="sn">login</button>
        </div>
        <div className="rb">
          <h2 className="tt"><span>Career</span><br />Path</h2>
          <img src={cp} alt="Logo" style={{ width: '100%', height: '300px', objectFit: 'cover', marginTop: '-50px', borderRadius: '16px' }} />
          <p className="acnt">dont have an account?</p>
          <button className="bt" style={buttonStyle} onClick={handleSignUpClick} id="su">sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login1;





/*

import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error message when passwords match
    if (name === 'confirmPassword' && formData.password === value) {
      setError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Password and Confirm Password do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword:formData.confirmPassword
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Error signing up. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /><br />
        Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /><br />
        Password: <input type="password" name="password" value={formData.password} onChange={handleChange} /><br />
        Confirm Password: <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Save</button>
      </form>
</div>
)
}

/*

*/