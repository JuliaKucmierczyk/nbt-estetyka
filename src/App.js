import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Training from './pages/Training';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/index.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
