import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h1>Technical Skills</h1>
      <div className="skills-grid">
        <div className="skill-card animate-slide-up">
          <h3>Automation Testing</h3>
          <p>Selenium, Playwright, Postman</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;