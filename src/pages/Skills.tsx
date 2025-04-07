import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Skills: React.FC = () => {
  return (
    <>
      <Header />
      <div className="skills">
        <div className="container">
          <h1>Skills</h1>
          <div className="skills-grid">
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Selenium" />
              <h3>Selenium</h3>
              <p>Web automation testing</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Playwright" />
              <h3>Playwright</h3>
              <p>Web automation and testing</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="JMeter" />
              <h3>JMeter</h3>
              <p>Performance testing</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Jenkins" />
              <h3>Jenkins</h3>
              <p>Continuous integration and continuous delivery</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Docker" />
              <h3>Docker</h3>
              <p>Containerization</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Kubernetes" />
              <h3>Kubernetes</h3>
              <p>Container orchestration</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="GCP" />
              <h3>GCP</h3>
              <p>Cloud computing platform</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Python" />
              <h3>Python</h3>
              <p>Programming language</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="API Testing" />
              <h3>API Testing</h3>
              <p>Testing application programming interfaces</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Test Automation" />
              <h3>Test Automation</h3>
              <p>Automated testing of software applications</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Performance Testing" />
              <h3>Performance Testing</h3>
              <p>Testing the speed and stability of software</p>
            </div>
            <div className="skill-card animate-slide-up">
              <img src="https://via.placeholder.com/100x80" alt="Security Testing" />
              <h3>Security Testing</h3>
              <p>Testing the security of software applications</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
