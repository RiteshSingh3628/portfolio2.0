import { useState } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

function App() {
  return (
    <>
      {loading && <Loader onLoadComplete={handleLoadComplete} />}
      {!loading && (
        <>
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
