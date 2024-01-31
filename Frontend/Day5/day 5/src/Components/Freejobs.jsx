import React from 'react';
import '../Style/Freejobs.css';
import { Link } from 'react-router-dom';

class FreeJobsSlider extends React.Component {
  handleNextClick = () => {
    let items = document.querySelectorAll('.freejobs-item');
    document.querySelector('.freejobs-slide').appendChild(items[0]);
  };

  handlePrevClick = () => {
    let items = document.querySelectorAll('.freejobs-item');
    document.querySelector('.freejobs-slide').prepend(items[items.length - 1]);
  };

  render() {
    return (
      <div>
        <div className="freejobs-container">
          <div className="freejobs-slide">
            <div className="freejobs-item" 
                 style={{ backgroundImage: 'url(https://images.pexels.com/photos/17070675/pexels-photo-17070675/free-photo-of-low-angle-view-of-a-steel-and-glass-skyscraper-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}> 
              <div className="freejobs-content">
                <div className="freejobs-name">Freelance</div>
                <div className="freejobs-des">Freelance professionals operate independently, offering their services to clients on a project-by-project basis. In these roles, a combination of skills and entrepreneurial qualities is essential for success. Freelancers need to excel in their specific area of expertise, delivering high-quality work to meet client expectations. Strong communication and negotiation skills are crucial for building and maintaining client relationships. Adaptability is key, as freelancers often navigate diverse projects and industries. Like entrepreneurs, freelancers must manage their businesses, handle finances, and market their services effectively.</div>
                <Link to="/Freelance">
                <button>See more</button></Link>
              </div>
            </div>
            <div className="freejobs-item" 
                 style={{ backgroundImage: 'url(https://images.pexels.com/photos/17070675/pexels-photo-17070675/free-photo-of-low-angle-view-of-a-steel-and-glass-skyscraper-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}> 
              <div className="freejobs-content">
                <div className="freejobs-name">Entrepreneur-based</div>
                <div className="freejobs-des">Entrepreneur-based roles revolve around creating and managing businesses. Entrepreneurs are individuals who take risks to establish and grow their ventures. These roles demand a unique set of skills, including creativity, risk-taking, and strategic thinking. Entrepreneurs need to identify opportunities, develop innovative solutions, and navigate the challenges of running a business. Effective communication, leadership, and adaptability are key, as they play a crucial role in building and leading a team.</div>
                <Link to="/Enter">
                <button>See more</button></Link>
              </div>
            </div>

            <div className="freejobs-item" 
                 style={{ backgroundImage: 'url(https://images.pexels.com/photos/17070675/pexels-photo-17070675/free-photo-of-low-angle-view-of-a-steel-and-glass-skyscraper-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}> 
              <div className="freejobs-content">
                <div className="freejobs-name">Skill-based</div>
                <div className="freejobs-des">Skill-based jobs emphasize proficiency in specific tasks or activities, relying on a set of acquired abilities. These roles span diverse fields, from technical positions to creative endeavors. Individuals in skill-based jobs excel in hands-on tasks, applying their honed abilities to achieve tangible outcomes. Adaptability and a commitment to refining skills are crucial, as these roles often evolve with technology and industry demands. Whether it is coding, design, or hands-on craftsmanship, success in skill-based jobs involves continuous improvement and a mastery of the tasks at hand.</div>
                <Link to="/Skill">
                <button>See more</button></Link>
              </div>
            </div>

            <div className="freejobs-item" 
                 style={{ backgroundImage: 'url(https://images.pexels.com/photos/17070675/pexels-photo-17070675/free-photo-of-low-angle-view-of-a-steel-and-glass-skyscraper-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}> 
              <div className="freejobs-content">
                <div className="freejobs-name">Knowledge-based</div>
                <div className="freejobs-des">Knowledge-based jobs leverage specialized expertise to drive results. These roles span various industries, demanding a deep understanding of specific subjects. Professionals in these jobs apply their knowledge to solve complex problems, make informed decisions, and stay ahead of industry trends. Adaptability and continuous learning are crucial, ensuring that skills remain relevant in dynamic environments. Whether in technology, healthcare, or finance, success in knowledge-based jobs hinges on the strategic application of expertise to achieve goals and contribute to organizational success.</div>
               <Link to="/Know">
                <button>See more</button></Link>
                
              </div>
            </div>
          </div>

          <div className="freejobs-button">
            <button className="freejobs-prev" onClick={this.handlePrevClick}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="freejobs-next" onClick={this.handleNextClick}>
                
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FreeJobsSlider;
