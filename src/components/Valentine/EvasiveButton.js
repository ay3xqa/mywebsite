import React, { useState, useRef, useEffect } from 'react';
import './EvasiveButton.css';

function EvasiveButton({ onClick }) {
  const [position, setPosition] = useState({ x: null, y: null });
  const [showMessage, setShowMessage] = useState(false);
  const buttonRef = useRef(null);
  const ESCAPE_DISTANCE = 150;
  const PADDING = 20;

  // Initialize position once button is mounted
  useEffect(() => {
    if (buttonRef.current && position.x === null) {
      const button = buttonRef.current.getBoundingClientRect();
      setPosition({
        x: window.innerWidth / 2 - button.width / 2 + 100,
        y: window.innerHeight / 2 - button.height / 2
      });
    }
  }, [position.x]);

  // Attach mousemove listener to document for full-screen tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current || position.x === null) return;

      const button = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = button.left + button.width / 2;
      const buttonCenterY = button.top + button.height / 2;

      const dx = e.clientX - buttonCenterX;
      const dy = e.clientY - buttonCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < ESCAPE_DISTANCE) {
        const angle = Math.atan2(dy, dx);
        const randomOffset = (Math.random() - 0.5) * 0.5;
        const escapeAngle = angle + Math.PI + randomOffset;
        const moveDistance = 75 + Math.random() * 100;

        let newX = position.x + Math.cos(escapeAngle) * moveDistance;
        let newY = position.y + Math.sin(escapeAngle) * moveDistance;

        // Constrain to viewport bounds
        const maxX = window.innerWidth - button.width - PADDING;
        const maxY = window.innerHeight - button.height - PADDING;

        newX = Math.max(PADDING, Math.min(maxX, newX));
        newY = Math.max(PADDING, Math.min(maxY, newY));

        setPosition({ x: newX, y: newY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [position]);

  const handleTouchStart = (e) => {
    e.preventDefault();
    if (!buttonRef.current) return;

    setShowMessage(true);

    const button = buttonRef.current.getBoundingClientRect();
    const maxX = window.innerWidth - button.width - PADDING;
    const maxY = window.innerHeight - button.height - PADDING;

    // Teleport to random position on screen
    const newX = PADDING + Math.random() * (maxX - PADDING);
    const newY = PADDING + Math.random() * (maxY - PADDING);

    setPosition({ x: newX, y: newY });

    setTimeout(() => setShowMessage(false), 1500);
  };

  // Don't render until position is initialized
  if (position.x === null) {
    return <div ref={buttonRef} className="evasive-button" style={{ visibility: 'hidden' }}>No</div>;
  }

  return (
    <>
      <button
        ref={buttonRef}
        className="evasive-button"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
        onClick={onClick}
        onTouchStart={handleTouchStart}
      >
        No
      </button>
      {showMessage && (
        <div className="evasive-message">Nice try!</div>
      )}
    </>
  );
}

export default EvasiveButton;
