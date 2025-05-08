import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Zayviana Singletary • Built with React</p>

      <div className="footer-links">
        <a href="https://github.com/zayvianas" target="_blank" rel="noopener noreferrer" className="footer-btn">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/zayvianas/" target="_blank" rel="noopener noreferrer" className="footer-btn">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:zayvianaay@gmail.com" className="footer-btn">
          <FaEnvelope /> Email Me
        </a>
        <a href="tel:+18137772209" className="footer-btn">
          <FaPhoneAlt /> Call/Text
        </a>
      </div>

    
    </footer>
  );
}

export default Footer;

