import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <h1>Professional Experience</h1>
      <div className="job animate-slide-up">
        <h2>Senior Software Test Engineer</h2>
        <p>CitrusAd | 06/2022 - Present</p>
        <ul>
          <li>Developed automation frameworks using Selenium Java with Cucumber</li>
          <li>Implemented CI/CD pipelines using Jenkins and Kubernetes</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;