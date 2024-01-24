// Login.jsx
import { useState } from 'react';
import '../Style/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (isEmailValid(email) && password === 'examplePassword') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please enter a valid email and password.');
    }
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <h1>Welcome!</h1>
      ) : (
        <div>
          <h1 className='login-title'>Job Explorer Login</h1>
          <label className='login-form-label'>
            Email:
            <input className='login-form-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label className='login-form-label'>
            Password:
            <input className='login-form-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <Link to="/Register">
            <button className='login-submit login-dk' onClick={handleLogin}>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
