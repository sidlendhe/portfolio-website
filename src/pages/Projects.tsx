import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project-card animate-slide-up">
          <h3>API Testing Framework</h3>
          <p>Automated testing suite for e-commerce APIs</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;