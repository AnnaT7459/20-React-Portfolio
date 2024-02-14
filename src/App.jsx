import React, { useState } from 'react';
// different sections of portfolio
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  // defaults to About Me when initialized
  const [currentSection, setCurrentSection] = useState('About Me');
  
  // updates the current section when nav links are clicked
  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };
  // conditional statements based off of what link is clicked. These sections will render based off of those clicks, but the header and footer will remain on each.
  return (
    <div className="App">
      <Header currentSection={currentSection} handleNavigationClick={handleNavigationClick} />
      <main>
        {currentSection === 'About Me' && <AboutMe />}
        {currentSection === 'Portfolio' && <Portfolio />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}
// can be used in other parts of the application-
export default App;
