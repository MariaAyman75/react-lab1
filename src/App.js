// import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeroSection from './components/hero/hero.js';
import BioSection from './components/bio/bio.js';
import SkillsSection from './components/skills/skills.js';
import EducationSection from './components/education/education.js';
import ContactSection from './components/contact/contact.js';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
