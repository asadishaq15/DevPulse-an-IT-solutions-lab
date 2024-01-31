import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from 'react-spring';
import './Services.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import GoToTop from './gotoTop/goToTop';

const ServiceCard = ({ iconClass, title, description, imageUrl ,path}) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <div className="service-card" data-aos="fade-up">
      <div className="card-content">
       <Link to={path}>{imageUrl && <img src={imageUrl} alt={title} className="img-fluid mb-3 image-width" />  }</Link>
        <span className={`icon ${iconClass}`}><i className={`fa ${iconClass}`}></i></span>
        <h6>
          <Link to={path} style={{color:"black"}}>{title}</Link>
          
          </h6>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary contact-btn" data-aos="zoom-in">Contact Us</button>
      </div>
    </div>
  );
};


const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const servicesData = [
    {
      iconClass: 'fa-laptop',
      title: 'Web App Development',
      description: 'Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.',
      path: '/web-app-development',  
      imageUrl :'https://indoanalytica.com/static/images/Web-design-4.gif'
       },
    {
      iconClass: 'fa-android',
      title: 'Mobile App Development',
      description: 'We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.',
      path: '/mobile-app-development',  
      imageUrl: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg'
    },
    {
      iconClass: 'fa-magic',
      title: 'SEO',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      path: '/seo-service',  
      imageUrl: 'https://www.ecompmarketing.com/images/ecomp-images/seo-iso.png'
    },
    {
      iconClass: 'fa-magic',
      title: 'CRM Softwares',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      path: '/crm-softwares',  
      imageUrl: 'https://www.agilecrm.com/img/dashboard-new/dashboard.png'
    },
    {
      iconClass: 'fa-magic',
      title: 'Graphic Designing',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      path: '/graphic-desiging',  
      imageUrl: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Banner-5-Rising-Graphic-Designers-and-What-Sets-Them-Apart-1-1280x720.jpg'
    },
    {
      iconClass: 'fa-magic',
      title: 'Digital Marketing',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      path: '/digital-marketing',  
      imageUrl: 'https://cdn.pixabay.com/photo/2020/12/09/03/10/digital-marketing-5816304_640.jpg'
    },
    {
      iconClass: 'fa-magic',
      title: 'IOS Apps',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      path: '/ios-app-development',  
      imageUrl:'https://assets.isu.pub/document-structure/230623080427-d680d6d5af381aee170023077b29741c/v1/6b82b0c87d50f27cdb5ce8294c7a7860.jpeg'
    },
    {
      iconClass: 'fa-magic',
      title: 'Android Apps',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      path: '/android-app-development',  
      imageUrl: 'https://www.advansoft.ae/wp-content/uploads/2017/06/Android-Applications.jpg'
    },
    {
      iconClass: 'fa-magic',
      title: 'ASO',
      description: 'The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.',
      path: '/appstore-optimization',  
      imageUrl: 'https://media.licdn.com/dms/image/D4D12AQFw4CJfl7EUlA/article-cover_image-shrink_600_2000/0/1699339845928?e=2147483647&v=beta&t=xl56shpTPLQL683-zWrgVW6UX8teCCZugyLWiZx6nbk'
    },
  
  ];

  return (
    <div className="pt-5 pb-5 services-container">
      <div className="container">
        <div className="row services-row">
          <div className="section-head col-sm-12" id="service">
            <div data-aos="zoom-in-up">
            <h1>Our Services</h1>
              </div>
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
              path={service.path}
            />
          ))}
           <GoToTop/>
        </div>
      </div>
    </div>
  );
};

export default Services;
