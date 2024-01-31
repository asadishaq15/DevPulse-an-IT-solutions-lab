import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import example from '../../src/images/example.jpg';
import example2 from '../../src/images/example2.jpg';

const Testimonials = () => {
  const options = {
    items: 2,
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  };

  const testimonialStyles = {
    maxWidth: '100%',
    maxHeight: '100%',
    transition: 'transform 0.3s ease-in-out', // Add transition property for the hover effect
  };

  return (
    <div className="testimonials mt-100">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <h2 style={{ marginTop: '-15rem' }}>Testimonials</h2>
          <p style={{ fontSize: '2rem' }}>See what people have to say about us</p>
        </div>

        <OwlCarousel {...options}>
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img src={example} alt="Testimonial image" style={testimonialStyles} />
            </div>
            <div className="testimonial-text">
              <h3>Person-1</h3>
              <h4>Designation</h4>
              <p>Testimonial</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img src={example2} alt="Testimonial image" style={testimonialStyles} />
            </div>
            <div className="testimonial-text">
              <h3>Person-2</h3>
              <h4>Designation</h4>
              <p>Testimonial</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-img">
              <img src={example2} alt="Testimonial image" style={testimonialStyles} />
            </div>
            <div className="testimonial-text">
              <h3>Person-2</h3>
              <h4>Designation</h4>
              <p>Testimonial</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
