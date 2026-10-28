import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import CinematicIntro from './components/CinematicIntro';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Always trigger the cinematic intro when the page loads or refreshes
  const [showIntro, setShowIntro] = useState(true);

  const handleCompleteIntro = () => {
    setShowIntro(false);
  };

  return (
    <ThemeProvider>
      {showIntro && <CinematicIntro onComplete={handleCompleteIntro} />}

      <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#090B10] text-[#151922] dark:text-[#F5F3EF] transition-colors duration-200 selection:bg-[#D62828]/25 selection:text-[#D62828]">
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;