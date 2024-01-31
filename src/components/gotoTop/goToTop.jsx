import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';


import React, { useEffect, useState } from 'react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <TopButton className='top-btn' onClick={goToBtn}>
          <TopIcon>&#8593;</TopIcon>
          <span>Top</span>
        </TopButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

const TopButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  span {
    margin-left: 5px;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1rem);
  }
`;

const TopIcon = styled.span`
  display: inline-block;
  animation: ${bounce} 1.2s linear infinite alternate-reverse;
`;

export default GoToTop;
