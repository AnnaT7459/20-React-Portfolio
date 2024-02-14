import React from 'react';
import './App.css';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <div className="resume-section">
          <h3>Download Resume</h3>
          <p>Click the link below to download my resume:</p>
          <a href="src\assets\Turner Resume 2024.pdf" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
