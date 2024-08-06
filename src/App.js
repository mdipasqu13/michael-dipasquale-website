import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import About from './About.js';

function App() {
 

  const leftHalfStyle = {
    width: '30%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounddark.jpeg)`,
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };

  return (
    <div className="app">
      <div className="container">
        <div className="left-half" style={leftHalfStyle}>
          <img src="profile-photo.jpeg" alt="Michael DiPasquale" className="profile-photo" />
          
          <h2 className="profile-name">Michael DiPasquale</h2> 
          <p className="profile-title">Full Stack Web Developer</p>
          <div className="social-icons">
            <a href="https://github.com/mdipasqu13" target="_blank" rel="noopener noreferrer">
              <img src="GitHubIcon.jpg" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/michael-dipasquale313" target="_blank" rel="noopener noreferrer">
              <img src="LinkedInIcon.jpeg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="mailto:michaeldipasquale313@gmail.com">
              <img src="GmailIcon.png" alt="Gmail" className="social-icon" />
            </a>
          </div>
          <a href="mailto:michaeldipasquale313@gmail.com" className="email-link">
            michaeldipasquale313@gmail.com
          </a>
        </div>
        <div className="right-half">
          <Header />
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          {/* <section id="contact">
            <Contact />
          </section> */}
        </div>
      </div>
    </div>
  );
}

export default App;