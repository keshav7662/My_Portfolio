import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Projects = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 900 });

  return (
    <animated.section id="projects" style={springProps} className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Project Title</h3>
            <p className="mb-4">Short description of the project.</p>
            <a href="https://github.com/yourusername/project-link" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          {/* Add more projects here */}
        </div>
      </div>
    </animated.section>
  );
};

export default Projects;
