import React from 'react';
import './bio.css'

const BioSection = () => {
  return (
    <section className="bio-section py-5">
      <div className="biocontainer">
        <div className='about'>
        <h2>About me</h2>
        </div>
        <div className='content'>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a href="/React Lecture 1.pdf" className="btn btn-primary" download>
          Download CV
        </a>
        </div>
      </div>
    </section>
  );
}

export default BioSection;
