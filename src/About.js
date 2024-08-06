import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Former Educator turned Full Stack Software Engineer with an interest in creating apps with intuitive and streamlined user experiences. Experienced in Javascript and React, with a background in anthropology, education, program management, coaching, team building and professional development.
          </p>
          <p>
            I discovered my joy for web development and software engineering through my lifelong passion for learning about new technology and challenging myself to seek further personal growth. I bring strong team building and project management skills that aid in the efficiency and quality of any team I work with.
          </p>
          <p>
            In my free time, I am an avid gamer, reader, and lover of all things sci-fi and fantasy. I am also a huge fan of table-top games. I'm big into meditation and personal development, and I am always looking for new ways to challenge myself and grow as a person and as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;