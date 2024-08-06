import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src="CalmSpaceLogo.png" alt="Calm Space" />
        {/* <h3>Calm Space</h3> */}
        <p>Calm Space is an app that provides users with a library of filterable meditation audio sessions, records users activity and allows them to easily keep track of their meditation history, record journal entries and earn ‘streaks’ to incentivize practice.
        </p>
        <a href="https://www.loom.com/share/4a13dd1dfd354aea96b0e91d87dba088?sid=ca6a4243-579e-4211-9ad1-96ac67b97cde" target="_blank" rel="noopener noreferrer">Live Demo</a> / 
        <a href="https://github.com/mdipasqu13/Full-Stack-Meditation_App-Project" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
      <div className="project">
        <img src="GamespaceLogo.png" alt="Game Space" />
        {/* <h3>Game Space</h3> */}
        <p>Styled after Letterboxd, users can favorite games to add them to their collection and wishlist.</p>
        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a> / 
        <a href="https://github.com/scmh001/fullstack-project" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
      <div className="project">
        <img src="BlackJackCLILogo.png" alt="Blackjack CLI" />
        {/* <h3>Blackjack CLI</h3> */}
        <p>Users can simulate a casino experience of blackjack using CLI, complete with sound effects and ascii card art.  Users can make bets and keep track of their winnings. Built in "help" feature utilizes OpenAI, feeding the AI engine the current game state along with card counting logic to provide instructional play suggestions and explanations when asked for. </p>
        <a href="https://www.youtube.com/watch?v=ZSLAgjrWh5s" target="_blank" rel="noopener noreferrer">Live Demo</a> / 
        <a href="https://github.com/scmh001/p3-cli-project" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </section>
  );
};

export default Projects;