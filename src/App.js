import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
