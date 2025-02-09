import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="home">
            Siddhesh Lendhe
          </h1>
          <p className="home">
            Software Test Engineer specializing in test automation, API testing, and CI/CD pipelines
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <Link 
              to="/experience" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Experience
            </Link>
            <Link 
              to="/projects" 
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Projects
            </Link>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12 shadow-2xl animate-slide-up">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Professional Summary</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Logical Software Test Engineer with 3+ years experience in API testing, web automation, 
            and CI/CD pipelines. Proficient in Selenium, Postman, and Kubernetes. Committed to 
            delivering high-quality software through comprehensive test strategies.
          </p>
        </div>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🎓 James Cook University</h3>
            <p className="text-gray-300">MSc Information Technology</p>
            <p className="text-sm text-blue-400 mt-2">GPA 6.5/7.0 • Academic Excellence Award</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">📘 Mumbai University</h3>
            <p className="text-gray-300">BE Electronics & Telecommunications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;