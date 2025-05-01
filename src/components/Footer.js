import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Zayviana Singletary • Built with React</p>

      <div className="footer-links">
        <a href="https://github.com/zayvianas" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/zayvianas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:zayvianaay@gmail.com">Email Me</a>
        <a href="tel:+18137772209">Call/Text</a>
      </div>

      <p className="footer-contact">
        Email: zayvianaa@gmail.com <br />
        Phone: +1(813) 777-2209 <br />
        Location: Based in the U.S. — Open to remote and Hybrid work
      </p>
    </footer>
  );
}

export default Footer;
