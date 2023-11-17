import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
    <div style={{background:"#464343"}}>
        <Header />
        <HeroSection />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
