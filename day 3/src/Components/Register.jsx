import { useState } from 'react';
import '../Style/Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {

    if (fullName && isEmailValid(email) && password === confirmPassword) {
      alert('Registration successful!');
    } else {
      alert('Invalid registration. Please fill in all fields correctly.');
    }
  };

  return (
    <div className='rd'>
    <div className="container">
      <h1>Register</h1>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <br />
      <Link to="/Home">
              <button onClick={handleRegister}>Register</button></Link>
    </div>
    </div>
  );
};

export default Register;
