// src/pages/Home.tsx
import React from 'react';
import './../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="animate-fade-in">
        <h1>
          Hi, I'm <span>Siddhesh</span>
        </h1>
        <p>A Software Automation Engineer specializing in test automation and CI/CD pipelines.</p>
        <a href="#projects">View My Work</a>
      </div>

      <div className="skills animate-slide-up">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Test Automation</h3>
            <p>Building robust frameworks for automated testing using Selenium, Cypress, and more.</p>
          </div>
          <div className="skill-card">
            <h3>CI/CD Pipelines</h3>
            <p>Designing and implementing CI/CD pipelines for seamless deployments.</p>
          </div>
          <div className="skill-card">
            <h3>Scripting</h3>
            <p>Writing efficient scripts in Python and Bash to automate repetitive tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;