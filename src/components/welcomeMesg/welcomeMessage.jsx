import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';import './welcomeMessage.css'; // Create a corresponding CSS file for styling

const WelcomeMessage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can adjust the duration of the animation
      }, []);

  return (
    <div className="welcome-container" data-aos="fade-up">
 <div className="logo-container" data-aos="zoom-in">
        <img src="https://cdn.pixabay.com/photo/2017/07/25/11/59/logo-2537871_1280.png" alt="Company Logo" className="logo" />
      </div>
      <div className="text-container">
        <h1 className="welcome-heading" data-aos="fade-right">Welcome to DevVerse – Fastest Growing IT Company</h1>
        <p className="welcome-description">
        DevVerse Technologies is an IT Software Company founded in Sep 2021 in Pakistan. We are offering multiple services in Website Development, Graphic Designing, Digital Marketing, and Mobile Apps Development. We make CMS, CRM and provide ERP solutions. DevVerse is a top software house in Pakistan and also a registered company in Pakistan. Additional services that we provide include website Designing, API's Development, SEO Services and IOS app development. We have highly experienced web developers who have successfully launched various huge projects and proved their skills in many projects. We are responsible for the working, and we try to keep the best relationship with our customers. As a Leading Software house in Pakistan, We have designed hundreds of Websites, Mobile Apps, Logos and Icons for our clients with a unique research-based process. Our software house is spreading the best services in the industry of IT from last seven years.
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
