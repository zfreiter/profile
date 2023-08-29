import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './app.css';

function App() {
  return (
    <>
      <Navbar />
      <main className='app__main'>
        <Welcome />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
