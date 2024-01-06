import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import client1 from '../images/Asad.jpeg';

const Clients = () => {
  const options = {
    items: 3,
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  const imageStyles = {
    maxWidth: '100%', 
    maxHeight: '100%', 
    
  };
  return (
    <div className="clients mt-100">
      <div className="container">
        <div className="section-header">
          <h2>Our Clients</h2>
          <p>We don't just build software; we build your business.</p>
        </div>
        <div className="clients-carousel-container">
          <OwlCarousel {...options}>
            <div className="client-item">
              <img src={client1} alt="Client 1" style={imageStyles}/>
            </div>
            <div className="client-item">
              <img src={client1} alt="Client 2"  style={imageStyles} />
            </div>
            <div className="client-item">
              <img src={client1} alt="Client 2"  style={imageStyles} />
            </div>
            <div className="client-item">
              <img src={client1} alt="Client 2"  style={imageStyles} />
            </div>
            <div className="client-item">
              <img src={client1} alt="Client 2"  style={imageStyles} />
            </div>
            <div className="client-item">
              <img src={client1} alt="Client 2"  style={imageStyles} />
            </div>
            <div className="client-item">
              <img src={client1} alt="Client 2"  style={imageStyles} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Clients;
