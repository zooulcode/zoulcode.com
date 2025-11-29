import { useState } from 'react'
import './App.css';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Technologies from './pages/Technologies';
import SpecializedServices from './pages/SpecializedServices';
import Contact from './pages/Contact';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/specialized-services" element={<SpecializedServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
