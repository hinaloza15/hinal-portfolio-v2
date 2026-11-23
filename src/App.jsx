import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import MoreProjects from './components/MoreProjects';
import Personal from './components/Personal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <Experience />
        <Education />
        <Skills />
        <MoreProjects />
        {/* <Personal /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
