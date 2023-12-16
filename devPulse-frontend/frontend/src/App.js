// Import necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components

// Import your CSS file
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
        <Navbar/>
        {/* For example: <Header /> */}

        <Routes>
          <Route path="/" exact component={<Home/>} />
          <Route path="/about" component={<About/>} />
          <Route path="/services" component={<Services/>} />
          <Route path="/portfolio" component={<Portfolio/>} />
          <Route path="/team" component={<Team/>} />
          <Route path="/careers" component={<Careers/>} />
          <Route path="/contact" component={<Contact/>} />
          <Route path="/faq" component={<Faq/>} />
        </Routes>

        {/* Include your footer component here */}
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
