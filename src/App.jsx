import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <InfoBar />
              <About />
              <Services />
              <Testimonials />
              <Appointment />
            </>
          } />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/depoimentos" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
