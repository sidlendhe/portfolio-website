import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Breadcrumb from './components/Breadcrumb';

const App = () => {
  return (
    <Router basename="/portfolio-website">
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;