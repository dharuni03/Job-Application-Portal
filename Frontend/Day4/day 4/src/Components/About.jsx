import aboutus from '../assets/aboutus.png';
const About = () => {
    return (
      <div>
        <img src={aboutus} alt="about" style={{ width:'1260px', height: '60%', objectFit: 'cover', borderRadius:'8px'}}/>      </div>
    );
  };
  
  export default About;