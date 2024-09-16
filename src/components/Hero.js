import React, { useEffect, useRef } from 'react';
import '../index.css';
import avatar from '../assets/arnab.png'; // Assuming the illustration image is stored here

const HeroSection = () => {
  const professionRef = useRef(null); // Ref for the profession text

  useEffect(() => {
    const professionElement = professionRef.current;

    // Trigger the typewriter effect after 1 second delay
    setTimeout(() => {
      professionElement.classList.add('typewriter-active');
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="intro-text">Hey, My name is</p>
          <h1 className="name">Arnab Das</h1>
          <p className="profession" ref={professionRef}>Software Engineer...</p> {/* Typewriter effect on this */}
          <button className="hero-button">Connect on LinkedIn</button>
        </div>
        <div className="hero-image">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
