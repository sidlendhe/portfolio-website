import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-2">
        I am a passionate Software Automation Engineer with experience in building robust test automation frameworks.
      </p>
      <h2 className="text-2xl font-bold mt-4">Skills</h2>
      <ul className="list-disc list-inside">
        <li>Selenium</li>
        <li>Jenkins</li>
        <li>Python</li>
        <li>CI/CD Pipelines</li>
      </ul>
    </div>
  );
};

export default About;