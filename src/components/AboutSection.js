import React, { useEffect, useRef } from 'react';
import '../index.css';

const AboutSection = () => {
  const aboutRef = useRef(null); // Reference to the about section

  useEffect(() => {
    const currentSection = aboutRef.current; // Copy the current value of aboutRef to a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add class when visible
          } else {
            entry.target.classList.remove('visible'); // Remove class when not visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (currentSection) {
      observer.observe(currentSection); // Use the local variable for observing
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection); // Clean up observer using the local variable
      }
    };
  }, []);

  return (
    <section className="about-section" ref={aboutRef} id="about">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p>
          I'm the tech enthusiast behind the screen – a <span>full-stack software developer</span> well-versed in the art of <span>web and Android</span>. 
          My journey through pixels and lines of code has led me to master the art of creating seamless digital experiences.
        </p>
        <p>
          What fuels me? The unquenchable thirst for knowledge of new technologies. Those late-night sessions wrestling with fresh code or diving into 
          the <span>intricacies of a novel framework</span>. I'm that person who's up at 3 am to learn a new technology just because it's fascinating.
        </p>
        <p>
          But there's more to me than just code. I'm an <span>entrepreneur by heart</span>, a dreamer who turns ideas into reality. I dance with innovation and thrive on challenges.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
