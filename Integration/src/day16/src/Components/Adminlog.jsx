


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/Adminlog.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password
      });

      console.log(response.data); // Handle the response data appropriately
      const token = response.data.token; // Extract the token from the response
      console.log('Token:', token); // Log the token to the console
      localStorage.setItem('token', token);

      // Keep existing redirection logic
      if (email === 'admin@gmail.com' && password === 'Admin@123') {
        navigate('/Adminhome');
      } else if (response.data.role === 'ADMIN') { 
        navigate('/Adminhome');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="gbody">
      <div className="login-container">
        <div className="box78">
          <div className="login-content">
            <h1 className="abi">Login Page</h1>
            <label className="tyr">
              Email:
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="tyr">
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            {/* Call handleLogin when button is clicked */}
            <button className="gh" onClick={handleLogin}>Login</button>
            <br />
            <h3><Link to="/Reg"></Link></h3>
          </div>
          <div className="homy">
            {/* <img src="https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;