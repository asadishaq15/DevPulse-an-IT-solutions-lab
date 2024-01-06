import React from 'react';

const Services = () => {
  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12" id="service">
            <h1>Our Services</h1>
            <p>
              We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <span className="icon feature_box_col_one"><i className="fa fa-laptop"></i></span>
              <h6>Web App Development</h6>
              <p>Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <span className="icon feature_box_col_two"><i className="fa fa-android"></i></span>
              <h6>Mobile App Development</h6>
              <p>We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <span className="icon feature_box_col_three"><i className="fa fa-magic"></i></span>
              <h6>Digital Marketing</h6>
              <p>The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
