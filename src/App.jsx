// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom'
// // different sections of portfolio
// import Header from './pages/Header';
// import AboutMe from './pages/AboutMe';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';
// import Footer from './pages/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//   // defaults to About Me when initialized
//   const [currentSection, setCurrentSection] = useState('About Me');
  
//   // updates the current section when nav links are clicked
//   const handleNavigationClick = (section) => {
//     setCurrentSection(section);
//   };
//   // conditional statements based off of what link is clicked. These sections will render based off of those clicks, but the header and footer will remain on each.
//   return (
//     <div className="App">
//       <Header currentSection={currentSection} handleNavigationClick={handleNavigationClick} />
//       <main>
//         {currentSection === 'About Me' && <AboutMe />}
//         {currentSection === 'Portfolio' && <Portfolio />}
//         {currentSection === 'Contact' && <Contact />}
//         {currentSection === 'Resume' && <Resume />}
//       </main>
//       <Footer />
//     </div>
//   );
// }
// // can be used in other parts of the application
// export default App;

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './pages';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
