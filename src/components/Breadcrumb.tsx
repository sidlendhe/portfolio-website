import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  return (
    <nav className="breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li>/</li>
        <li><Link to="/experience">Experience</Link></li>
        <li>/</li>
        <li><Link to="/skills">Skills</Link></li>
        <li>/</li>
        <li><Link to="/projects">Projects</Link></li>
        <li>/</li>
        <li><Link to="/contact">Contact</Link></li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;