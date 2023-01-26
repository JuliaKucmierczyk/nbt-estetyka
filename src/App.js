import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Pricing from './components/Pricing';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
