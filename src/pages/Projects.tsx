import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Automated Testing Framework',
    description: 'A framework for automating UI tests using Selenium and Python.',
    technologies: ['Selenium', 'Python', 'Pytest'],
    link: 'https://github.com/yourusername/automated-testing-framework',
  },
  {
    title: 'CI/CD Pipeline Setup',
    description: 'Configured a CI/CD pipeline using Jenkins for automated deployments.',
    technologies: ['Jenkins', 'Docker', 'Bash'],
    link: 'https://github.com/yourusername/cicd-pipeline',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-4 space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;