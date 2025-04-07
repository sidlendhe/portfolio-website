import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="container">
          <h1>About Me</h1>
          <img src="https://via.placeholder.com/200" alt="About" className="rounded-full shadow-md" style={{ width: '200px' }} />
          <p className="mt-4 text-lg">
            As a Software Test Engineer, I am passionate about ensuring the quality of software products through robust testing and automation strategies. With a strong foundation in software development principles and testing methodologies, I strive to deliver high-quality solutions that meet the needs of the users.
          </p>
          <p className="mt-2 text-lg">
            I am always looking for new challenges and opportunities to learn and grow in the field of software testing. I am committed to staying up-to-date with the latest trends and technologies in the industry.
          </p>
          <h2 className="mt-8">Skills</h2>
          <img src="https://via.placeholder.com/300x100" alt="Skills" />
          <ul className="list-disc list-inside text-lg">
            <li>Selenium</li>
            <li>Jenkins</li>
            <li>Python</li>
            <li>CI/CD Pipelines</li>
            <li>API Testing</li>
            <li>Test Automation</li>
            <li>Performance Testing</li>
            <li>Security Testing</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
