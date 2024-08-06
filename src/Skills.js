import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', img: 'js-icon.png' },
    { name: 'Python', img: 'python-icon.jpg' },
    { name: 'Flask', img: 'flask-icon.png' },
    { name: 'React', img: 'react-icon.jpg' },
    { name: 'HTML', img: 'html-5-icon.png' },
    { name: 'CSS', img: 'css-logo.jpeg' }, 
    { name: 'Git', img: 'git-icon.webp' },
    { name: 'REST APIs', img: 'rest-api-icon.png' },
    { name: 'SQL', img: 'sql-icon.png' },
    { name: 'Node.js', img: 'node-js-icon.jpeg' },
    { name: 'Tailwind', img: 'tailwind-css-icon.jpeg' },
    { name: 'MUI', img: 'mui-icon.jpeg' },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skill-list">
        {skills.map(skill => (
          <li key={skill.name}>
            <img src={`/${skill.img}`} alt={skill.name} title={skill.name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;