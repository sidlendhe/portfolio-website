import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ol className="flex space-x-2 text-gray-300">
        <li>
          <Link to="/" className="hover:text-blue-400">Home</Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/experience" className="hover:text-blue-400">Experience</Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/skills" className="hover:text-blue-400">Skills</Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;