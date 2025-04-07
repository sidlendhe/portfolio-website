import React, { useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'API Testing Framework',
      description: 'Automated testing suite for e-commerce APIs. This framework is designed to test the functionality and performance of e-commerce APIs.',
      tools: 'Selenium, RestAssured, Jenkins, Docker',
      details:
        'This project involved creating a robust API testing framework using Selenium and RestAssured. Jenkins was used for continuous integration, and Docker was used for containerization.',
      image: '/project1.jpg',
    },
    {
      id: 2,
      title: 'Web Automation Framework',
      description: 'End-to-end testing framework for web applications. This framework is designed to automate the testing of web applications.',
      tools: 'Selenium, Playwright, Cucumber, GCP',
      details:
        'This project involved creating an end-to-end testing framework for web applications using Selenium and Playwright. Cucumber was used for behavior-driven development, and GCP was used for cloud deployment.',
      image: '/project2.jpg',
    },
    {
      id: 3,
      title: 'Mobile Automation Framework',
      description: 'Cross-platform testing framework for mobile applications. This framework is designed to automate the testing of mobile applications on both iOS and Android platforms.',
      tools: 'Appium, JMeter, Jenkins',
      details:
        'This project involved creating a cross-platform testing framework for mobile applications using Appium. JMeter was used for performance testing, and Jenkins was used for continuous integration.',
      image: '/project3.jpg',
    },
  ];

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Header />
      <div className="projects">
        <div className="container">
          <h1>Projects</h1>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card animate-slide-up" key={project.id}>
                <img src={project.image} alt={project.title} className="rounded-lg shadow-md" style={{ width: '100%' }} />
                <h3>{project.title}</h3>
                <p className="text-lg">{project.description}</p>
                <p className="text-sm">
                  <strong>Tools:</strong> {project.tools}
                </p>
                <button onClick={() => handleViewProject(project)}>View Project</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={handleCloseProjectDetails} />
      )}
      <Footer />
    </>
  );
};

export default Projects;
