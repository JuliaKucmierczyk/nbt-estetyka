import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Training from "./pages/Training";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CookieConsent from "./components/CookieConsent";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nbt-estetyka/" element={<Home />} />
        <Route path="/omnie" element={<About />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/treningi" element={<Training />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
