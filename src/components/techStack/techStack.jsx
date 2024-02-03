import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from '../caorusel/arrow';

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Arrow className={className} style={style} onClick={onClick}></Arrow>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Arrow className={className} style={style} onClick={onClick}></Arrow>
  );
}

const SlideContent = ({ rightImageSrc, index }) => {
  return (
    <div
      className="slide-content"
      style={{
        height: '550px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={rightImageSrc}
        alt={`Logo ${index}`}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

const Carousel = () => {
  const [isArrowsVisible, setIsArrowsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsArrowsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsArrowsVisible(false);
  };

  const sliderRef = useRef(null);
  const originalSlides = [
    {
      rightImageSrc:
        'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
    },
    {
      rightImageSrc:
        'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    },
    {
      rightImageSrc:
        'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png',
    },
    {
      rightImageSrc:
        'https://cdn.pixabay.com/photo/2023/05/09/10/40/robot-7981037_1280.png',
    },
    {
      rightImageSrc:
        'https://cdn.pixabay.com/photo/2022/01/16/17/24/wordpress-6942722_1280.png',
    },
  ];

  // Manually create an array with duplicated slides for the infinite loop effect
  const slides = [...originalSlides, ...originalSlides, ...originalSlides];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    onSwipe: (event) => {
      // Detect swipe to the last slide and manually move to the first slide without visual change
      if (event.direction === 'left' && event.current === slides.length - 1) {
        setTimeout(() => {
          sliderRef.current.slickGoTo(0, true);
        }, 0);
      }
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
            <SlideContent
              rightImageSrc={slide.rightImageSrc}
              index={index % originalSlides.length}
            />
          </div>
        ))}
      </Slider>
      {isArrowsVisible && (
        <div className="arrows-container">
          <NextArrow
            className="arrow left"
            onClick={() => sliderRef.current.slickPrev()}
            carouselHovered={isArrowsVisible}
          />
          <Arrow
            className="arrow right"
            onClick={() => sliderRef.current.slickNext()}
            carouselHovered={isArrowsVisible}
          >
            <i className="fas fa-chevron-right"></i>
          </Arrow>
        </div>
      )}
    </div>
  );
};

export default Carousel;
