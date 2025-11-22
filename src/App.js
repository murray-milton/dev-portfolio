import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
