import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Navigate to the home page
  //   navigate('/');

  //   // Scroll to the Home2 section after a short delay to ensure navigation has completed
  //   setTimeout(() => {
  //     const home2Section = document.getElementById('home2');
  //     if (home2Section) {
  //       home2Section.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, 0);
  // }, [navigate]);

  return (
    <div>
      {/* About content goes here */}
    
    </div>
  );
}

export default About;
