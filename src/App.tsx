import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';
import Loader from './components/ui/Loader';
import './styles/globals.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement initial
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={loading ? 'pointer-events-none select-none overflow-hidden h-screen' : ''}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default App;
