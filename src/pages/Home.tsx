import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <><div className="home">
      <div className="animate-fade-in">
        <h1>Hi, I am Siddhesh</h1>
        <p>I am a Software Test Engineer specializing in automation, API testing, and CI/CD pipelines.</p>
        <div className="flex justify-center gap-4">
          <Link to="/experience" className="home-link">Experience</Link>
          <Link to="/skills" className="home-link">Skills</Link>
        </div>
      </div>

      <div className="animate-slide-up">
        <h2>Professional Summary</h2>
        <p>
          <ol>With over 3 years of experience, I specialize in designing and implementing test automation frameworks,</ol>
          API testing, and CI/CD pipelines. I am passionate about delivering high-quality software solutions.
        </p>
      </div>
    <div className="animate-slide-up">
        <h2>Professional Summary</h2>
        <p>
          With over 3 years of experience, I specialize in designing and implementing test automation frameworks,
          API testing, and CI/CD pipelines. I am passionate about delivering high-quality software solutions.
        </p>
      </div></div></>

      
  );
};

export default Home;