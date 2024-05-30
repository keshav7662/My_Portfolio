import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700 });

  return (
    <animated.section id="about" style={springProps} className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">Detail about your background, experience, and interests.</p>
      </div>
    </animated.section>
  );
};

export default About;
