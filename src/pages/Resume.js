import React from 'react';

function Resume() {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <p>You can view or download my resume below:</p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
        📄 View / Download PDF
      </a>
    </div>
  );
}

export default Resume;
