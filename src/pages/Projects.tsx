import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="max-w-6xl mx-auto">
        <h1 className="projects">Key Projects</h1>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                🤖
              </div>
              <div>
                <h3 className="projects">Test Automation Framework</h3>
                <p className="text-gray-400">Selenium | Java | Cucumber</p>
              </div>
            </div>
            <p className="text-gray-300">
              Developed enterprise-level automation framework reducing regression testing time by 65%
            </p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 p-3 rounded-lg mr-4">
                🔄
              </div>
              <div>
                <h3 className="text-xl font-bold">CI/CD Pipeline</h3>
                <p className="text-gray-400">Jenkins | Kubernetes | GCP</p>
              </div>
            </div>
            <p className="text-gray-300">
              Implemented containerized deployment pipeline improving release frequency by 40%
            </p>
          </div>

          {/* Add more projects */}
        </div>
      </div>
    </div>
  );
};

export default Projects;