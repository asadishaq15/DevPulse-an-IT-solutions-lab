import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Team from './components/team';
import Careers from './components/careers';
import Contact from './components/contact';
import Faq from './components/faq';
import Portfolio from './components/portfolio';
import Navbar from './components/navbar';
import Footer from './components/foot';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

    
        <Footer />
      </div>
    </Router>
  );
}

export default App;
