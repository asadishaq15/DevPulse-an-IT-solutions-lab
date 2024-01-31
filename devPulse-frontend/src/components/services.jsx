
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Services.css'; // Import the CSS file

const ServiceCard = ({ iconClass, title, description, imageUrl }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <animated.div className="service-card" style={props}>
      {imageUrl && <img src={imageUrl} alt={title} className="img-fluid mb-3" />}
      <span className={`icon ${iconClass}`}><i className={`fa ${iconClass}`}></i></span>
      <h6>{title}</h6>
      <p>{description}</p>
      <button className="btn btn-primary contact-btn">Contact Us</button>
    </animated.div>
  );
};

const Services = () => {
  const [render, setRender] = useState(false);
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  useEffect(() => {
    setRender(true);
  }, []);

  const servicesData = [
    {
      iconClass: 'fa-laptop',
      title: 'Web App Development',
      description: 'Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.',
      imageUrl :'https://indoanalytica.com/static/images/Web-design-4.gif'
       },
    {
      iconClass: 'fa-android',
      title: 'Mobile App Development',
      description: 'We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.',
      imageUrl: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg'
    },
    {
      iconClass: 'fa-magic',
      title: 'SEO',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      imageUrl: 'https://www.ecompmarketing.com/images/ecomp-images/seo-iso.png'
    },
    {
      iconClass: 'fa-magic',
      title: 'CRM Softwares',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      imageUrl: 'https://www.agilecrm.com/img/dashboard-new/dashboard.png'
    },
    {
      iconClass: 'fa-magic',
      title: 'Graphic Designing',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      imageUrl: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Banner-5-Rising-Graphic-Designers-and-What-Sets-Them-Apart-1-1280x720.jpg'
    },
    {
      iconClass: 'fa-magic',
      title: 'Digital Marketing',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/12/09/03/10/digital-marketing-5816304_640.jpg'
    },
    {
      iconClass: 'fa-magic',
      title: 'IOS Apps',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      imageUrl: 'data:image/jpeg;base64,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'
    },
    {
      iconClass: 'fa-magic',
      title: 'Android Apps',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      imageUrl: 'https://www.advansoft.ae/wp-content/uploads/2017/06/Android-Applications.jpg'
    },
    {
      iconClass: 'fa-magic',
      title: 'ASO',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      imageUrl: 'https://media.licdn.com/dms/image/D4D12AQFw4CJfl7EUlA/article-cover_image-shrink_600_2000/0/1699339845928?e=2147483647&v=beta&t=xl56shpTPLQL683-zWrgVW6UX8teCCZugyLWiZx6nbk'
    },
  
  ];

  return (
  

  
    <animated.div style={props}>
    <div className="pt-5 pb-5 services-container">
      <div className="container">
        <div className="row services-row">
          <div className="section-head col-sm-12" id="service">
            <h1>Our Services</h1>
            <p>
              We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients.
            </p>
          </div>

          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              iconClass={service.iconClass}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}

        </div>
      </div>
    </div>
  </animated.div>
  
  );
};

export default Services;
