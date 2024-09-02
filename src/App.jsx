import { HelmetProvider } from 'react-helmet-async';
import styles from './App.module.css';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import MyComponent from './components/MyComponent';
import { Navbar } from './components/Navbar/Navbar';

import { Skills } from './components/Skills/Skills';
function App() {
  

  return (
    <div className={styles.App}>
     <Navbar/>
     <HelmetProvider><MyComponent /></HelmetProvider>
     <Hero />
     <About />
     <Skills />
     
    </div>
  )
}

export default App
