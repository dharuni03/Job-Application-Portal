import '../Style/Cover.css';
import { Link } from 'react-router-dom';

const Cover = () => {
  return (
    <div className="banner-area">
      <header>
        <div className="menu">
          <ul>
            {/* <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li> */}
          </ul>
        </div>
      </header>
      <div className="banner-text">
        <h1 className='vf'>Career Path</h1>
        <p>Navigate your career journey with us. Find, apply, and thrive in your dream job effortlessly. Discover opportunities, shape your path with our career pathCrafting futures, one job at a time. Your career success story begins with us.</p>
        <Link to="/Adminlog"><button className="banner-button1">Admin</button></Link>
<Link to="/Login"><button className="banner-button2">User</button></Link>

      </div>
    </div>
  );
};

export default Cover;
