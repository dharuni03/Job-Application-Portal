// Login.jsx
import  { useState } from 'react';
import '../Style/Adminlog.css';
import cp from '../assets/cp.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

//   const handleSignInClick = () => {
//     setShowSignUp(false);
//   };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };
  const inputStyle = {
    background: 'var(--pale)',
    width: '65%',
    color: 'white',
    padding: '9px',
    // margin: '7px',
  };
  
  const signupButtonStyle = {
    backgroundColor: '#34b5dd', // Change this to the desired color
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
//   const loginButtonStyle = {
//     backgroundColor: '#34b5dd', // Change this to the desired color
//     color: 'white',
//     padding: '10px 15px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };
  return (
    <div className="cn">
      <div className="wc">
        <div className="pb" style={{ transform: showSignUp ? 'translateX(80%)' : 'translateX(0%)' }}>
          <div className={showSignUp ? 'sgn nodisplay' : 'sgn'}>
            <h1 className='po'>sign in</h1>
            <form style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '17px', marginTop: '40px' }} className="mp your-signin-form-class" autoComplete="off">
              <input type="text" placeholder="username" style={inputStyle}/>
              <input type="password" placeholder="password" style={inputStyle}/>
              <div className="cb">
                {/* <input type="checkbox" id="rm" style={checkboxStyle} /><label htmlFor="rm" style={labelStyle}>remember me</label> */}
              </div><Link to="/Adminhome">
              <button className="bt sbmt" style={signupButtonStyle}>login</button></Link>
            </form>
          </div>
          <div className={showSignUp ? 'sgn' : 'sgn nodisplay'}>
            {/* <h1 className='po'>register</h1>
            <form style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '17px', marginTop: '40px' }} className="your-signup-form-class" autoComplete="off">
              <input type="text" placeholder="username" style={inputStyle}/>
              <input type="email" placeholder="email" style={inputStyle}/>
              <input type="password" placeholder="password" style={inputStyle}/>
              <input type="password" placeholder="confirm password" style={inputStyle}/>
              <Link to="/Home">
              <button className="bt sbmt" style={signupButtonStyle}>sign Up</button></Link>
            </form> */}
          </div>
        </div>
        <div className="lb">
          {/* <h2 className="tt"><span>BB</span>&<br />BQ</h2> */}
          {/* <p className="dsc">find your perfect <span>career path</span></p> */}
          <img src={cp} alt="Logo" style={{ width:'110%', height:'300px', objectFit: 'cover',marginLeft:'-20px', borderRadius:'16px'}}/>
          {/* <p className="acnt">have an account?</p> */}
          {/* <button className="bt"style={loginButtonStyle} onClick={handleSignInClick} id="sn">login</button> */}
        </div>
        <div className="rb">
          <h2 className="tt"><span>Career</span><br />Path</h2>
          {/* <p className="dsc">find your perfect <span></span></p> */}
          <img src={cp} alt="Logo" style={{ width:'100%', height:'300px', objectFit: 'cover',marginTop:'-50px', borderRadius:'16px'}}/>
          {/* <p className="acnt">dont have an account?</p> */}
          {/* <button className="bt"style={loginButtonStyle} onClick={handleSignUpClick} id="su">sign up</button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
