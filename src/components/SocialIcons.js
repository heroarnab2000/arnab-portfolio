import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../index.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/arnabdas2k00/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/heroarnab2000" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="mailto:heroarnab2000@gmail.com">
        <FaEnvelope size={30} />
      </a>
    </div>
  );
};

export default SocialIcons;
