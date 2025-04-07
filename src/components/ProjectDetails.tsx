import React from 'react';

interface ProjectDetailsProps {
  project: {
    title: string;
    description: string;
    tools: string;
    details: string;
  };
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  return (
    <div className="project-details-overlay">
      <div className="project-details-card">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>
          <strong>Tools:</strong> {project.tools}
        </p>
        <p>{project.details}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectDetails;
