// Arrow.js

import React, { useState } from 'react';

const Arrow = ({ className, style, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        padding: "50px",
        borderRadius: "20px",
        width: "60px",
        height: "40px",
        cursor: "pointer",
        zIndex: 1,
        background: `rgba(255, 255, 255, ${isHovered ? 0.7 : 0.2})`,
        position: "absolute",
        margin: "10px",
        opacity: isHovered ? 3 : 2, // New: Control opacity based on isHovered state
        transition: "opacity 0.3s ease", 
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default Arrow;
