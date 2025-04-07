import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Experience: React.FC = () => {
  return (
    <>
      <Header />
      <div className="experience">
        <div className="container">
          <h1>Experience</h1>
          <div className="timeline">
            <div className="job animate-slide-left">
              <img src="https://via.placeholder.com/100x80" alt="CitrusAd" />
              <h2>Senior Software Test Engineer</h2>
              <p>CitrusAd | 06/2022 - Present</p>
              <ul>
                <li>Developed automation frameworks using Selenium Java with Cucumber</li>
                <li>Implemented CI/CD pipelines using Jenkins and Kubernetes</li>
                <li>Utilized Docker and GCP for testing and deployment</li>
                <li>Used Playwright and JMeter for performance and load testing</li>
              </ul>
            </div>
            <div className="job animate-slide-right">
              <img src="https://via.placeholder.com/100x80" alt="Previous Company" />
              <h2>Test Automation Engineer</h2>
              <p>Previous Company | 2018 - 2022</p>
              <ul>
                <li>Automated testing of web applications using Selenium</li>
                <li>Created and executed test cases</li>
                <li>Reported and tracked defects</li>
                <li>Implemented CI/CD pipelines using Jenkins</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Experience;
