import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="container">
          <div className="animate-fade-in">
            <h1>Hi, I am Siddhesh</h1>
            <img src="https://via.placeholder.com/200" alt="Profile" className="rounded-full shadow-md" style={{ width: '200px' }} />
            <p className="mb-4">I am a Software Test Engineer specializing in automation, API testing, and CI/CD pipelines.</p>
            <p className="mb-8">Welcome to my portfolio website! I'm passionate about delivering high-quality software solutions. This portfolio showcases my skills and experience in software testing, automation, and CI/CD.</p>
            <div className="flex justify-center gap-4">
              <Link to="/experience" className="home-link">Experience</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects" className="home-link">Projects</Link>
              <Link to="/contact" className="home-link">Contact</Link>
            </div>
          </div>
          <div className="animate-slide-up mt-12">
            <h2>About Me</h2>
            <img src="https://via.placeholder.com/300x200" alt="About Me" className="shadow-md" />
            <p className="text-lg">
              As a Software Test Engineer, I bring a strong understanding of software development principles and testing methodologies. I specialize in designing and implementing test automation frameworks, API testing, and CI/CD pipelines. My goal is to deliver high-quality software solutions that meet the needs of the users.
            </p>
          </div>
           <div className="animate-slide-up mt-8">
            <h2>Skills</h2>
            <img src="https://via.placeholder.com/300x200" alt="Skills" className="shadow-md" />
            <p className="text-lg">
              Here are some of my key skills:
            </p>
             <Link to="/skills" className="home-link">View Skills</Link>
          </div>
          <div className="animate-slide-up mt-8">
            <h2>Experience</h2>
             <img src="https://via.placeholder.com/300x200" alt="Experience" className="shadow-md" />
            <p className="text-lg">
              Here's a summary of my experience:
            </p>
             <Link to="/experience" className="home-link">View Experience</Link>
          </div>
          <div className="animate-slide-up mt-8">
            <h2>Contact</h2>
             <img src="https://via.placeholder.com/300x200" alt="Contact" className="shadow-md" />
            <p className="text-lg">
              Feel free to reach out to me via the <Link to="/contact">contact page</Link> to discuss potential opportunities or collaborations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
