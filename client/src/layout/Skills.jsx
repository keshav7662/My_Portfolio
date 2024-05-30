import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li className="bg-white p-2 rounded shadow-md">HTML</li>
          <li className="bg-white p-2 rounded shadow-md">CSS</li>
          <li className="bg-white p-2 rounded shadow-md">JavaScript</li>
          <li className="bg-white p-2 rounded shadow-md">React</li>
          <li className="bg-white p-2 rounded shadow-md">Node.js</li>
          <li className="bg-white p-2 rounded shadow-md">Express</li>
          <li className="bg-white p-2 rounded shadow-md">MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
