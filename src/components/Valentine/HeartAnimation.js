import React from 'react';
import './HeartAnimation.css';

function HeartAnimation() {
  const hearts = Array.from({ length: 20 }, (_, i) => {
    const left = Math.random() * 100;
    const animationDuration = 10 + Math.random() * 10;
    const animationDelay = Math.random() * 10;
    const size = 0.5 + Math.random() * 1;
    const opacity = 0.1 + Math.random() * 0.2;

    return (
      <div
        key={i}
        className="floating-heart"
        style={{
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          fontSize: `${size}rem`,
          opacity: opacity
        }}
      >
        ❤️
      </div>
    );
  });

  return <div className="heart-animation-container">{hearts}</div>;
}

export default HeartAnimation;
