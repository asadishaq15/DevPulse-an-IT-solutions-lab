import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';
import bg_slide1 from "../../images/img1.jpg";

import './carousel.css';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer",
        left: "0px",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        padding: "50px",
        borderRadius: "100%",
        cursor: "pointer",
        right:"0px"
      }}
      onClick={onClick}
    ></div>
  );
}
const SlideContent = ({ title, description, buttonText, rightImageSrc }) => {
  const [isTapped, setIsTapped] = useState(false);
  const handleTapStart = () => {
    setIsTapped(true);
  };
  
  const handleTapEnd = () => {
    setIsTapped(false);
    // Implement the functionality for the 'Read More' action here
  };
  
  const handleTapCancel = () => {
    setIsTapped(false);
  };
  return (

    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="content"
  >
    <div className="slide-content">
      <div className="text-content">
      <motion.h1
  initial={{ translateY: "100%", opacity: 0 }}
  animate={{ translateY: "0%", opacity: 1 }}
  transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
>
  {title}
</motion.h1>
        <motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}>
          {description}
        </motion.p>
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 2.5 }}>
          {buttonText}
        </motion.button>
      </div>
      {rightImageSrc && (
  <motion.div
    className="image-content"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
  >
    <motion.img
      src={rightImageSrc}
      alt={title}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
    />
  </motion.div>
)}
    </div>
  </motion.div>
  );
};


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [areArrowsVisible, setAreArrowsVisible] = useState(false);

  const handleMouseEnter = () => {
    setAreArrowsVisible(true);
  };

  const handleMouseLeave = () => {
    setAreArrowsVisible(false);
  };

  const sliderRef = useRef(null);
  const slides = [
    {
      title: "WELCOME TO DevVerse",
      description: "Leading top software house in Pakistan. We offer our services in web designing, CRM systems, digital marketing, and mobile apps.",
      buttonText: "Read More",
      rightImageSrc: bg_slide1, // Add the right image source
     
    },
    {
      title: "Mobile Apps Development",
      description: "We know how to build Apps that will help you increase business.",
      buttonText: "Read More",
      rightImageSrc: "https://cdn.pixabay.com/photo/2023/02/26/07/37/android-mobile-app-development-7815022_1280.png", // Add the right image source
      backgroundColor:"#f8f8ff"
    },
    {
      title: "Web Development Responsive & Reliable",
      description: "We plan, design your website from start to finish, ensuring a high ROI for clients. Our major concern is client satisfaction.",
      buttonText: "Read More",
      rightImageSrc: "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png", // Add the right image source
      backgroundColor:"#d3d3d3"
    },
    {
      title: "Search Engine Optimization",
      description: "We start the SEO process with a full website audit and recommendations report. Our team will review your key metrics, perform keyword research, analyze your competitors, your linkscape, and key pages of your website, and create a detailed implementation plan.",
      buttonText: "Read More",
      rightImageSrc: "https://cdn.pixabay.com/photo/2016/10/17/03/01/seo-1746842_1280.png", // Add the right image source
      backgroundColor:"#dcdcdc "
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    focusOnSelect: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "ease",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
    className="custom-carousel-wrapper"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <Slider {...settings} ref={sliderRef}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="slide-content"
            style={{
              height: "550px",
              display: "flex",
              background: index === 0 ? `url(${slide.rightImageSrc}) center/cover no-repeat` : slide.backgroundColor,
            }}
          >
            <AnimatePresence exitBeforeEnter={false} initial={false}>
              {currentSlide === index && (
                <SlideContent
                  title={slide.title}
                  description={slide.description}
                  buttonText={slide.buttonText}
                  rightImageSrc={slide.rightImageSrc}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </Slider>
    {areArrowsVisible && (
      <div className="arrows-container">
        <PrevArrow />
        <NextArrow />
      </div>
    )}
  </div>
  );
};


export default Carousel;
