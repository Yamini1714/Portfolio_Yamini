import { HelmetProvider } from 'react-helmet-async';
import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Hero } from './components/Hero/Hero';
import MyComponent from './components/MyComponent';
import { Navbar } from './components/Navbar/Navbar';
import { Project } from './components/Projects/Project';
import { ProjectCard } from './components/Projects/ProjectCard';
import { Skills } from './components/Skills/Skills';

function App() {
  

  return (
    <div className={styles.App}>
     <Navbar/>
     <HelmetProvider><MyComponent /></HelmetProvider>
     <Hero />
     <About />
     <Skills />
     <Project />
     <ProjectCard/>
     <Contact/>
    
     
    </div>
  )
}

export default App
