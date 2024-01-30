import React from 'react'
import Navbar from './navbar'
import Footer from './foot'
import Contact from './contact'
import FAQSection from './faq'
import TeamSection from './team'
import Services from './services'

const Home = () => {
  return (
    <div>
      
      <Navbar/>
       <section id="home" className="home">
      <h1>Bring your Business Online</h1>
      <h2>with IT Company Services</h2>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </section>
    <Services/>
    <TeamSection/>
    <Contact/>
    <FAQSection/>
    <Footer/>
    </div>
  )
}

export default Home
