import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import HeartAnimation from '../Valentine/HeartAnimation';
import EvasiveButton from '../Valentine/EvasiveButton';
import ValentineECard from '../Valentine/ValentineECard';
import './ValentinePage.css';

// Hard-coded card data
const RECIPIENT_NAME = 'Esther';
const SENDER_NAME = 'Alex';
const MESSAGE = 
`Happy Valentine's Day Easter! 
Thank you for all the memories and joy you bring to my life. You're an anchor in my life and I'm so grateful to have someone in my corner who never wavers behind me through the ups and downs of life. 
I appreciate you so much and your hard work has paid off in so many ways as you've been able to make it the city where dreams are fufilled.
I love you. To more wins and memories!
`

function ValentinePage() {
  const [stage, setStage] = useState('question'); // 'question' | 'card'

  const fireConfetti = () => {
    const colors = ['#ff6b8a', '#ff4757', '#ff9ff3', '#fd79a8', '#e84393'];

    const fireHeart = (angle) => {
      confetti({
        particleCount: 50,
        angle: angle,
        spread: 60,
        origin: { x: angle < 90 ? 0.2 : 0.8, y: 0.6 },
        colors: colors,
        shapes: ['circle'],
        scalar: 1.2
      });
    };

    fireHeart(60);
    fireHeart(120);

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: colors
      });
    }, 300);

    setTimeout(() => {
      fireHeart(45);
      fireHeart(135);
    }, 600);
  };

  const handleYesClick = () => {
    fireConfetti();
    setTimeout(() => {
      setStage('card');
    }, 1500);
  };

  const handleStartOver = () => {
    setStage('question');
  };

  return (
    <div className="valentine-page">
      <HeartAnimation />

      <div className="valentine-content">
        {stage === 'question' && (
          <div className="question-stage">
            <h1 className="valentine-title">Will you be my Valentine?</h1>
            <p className="valentine-subtitle">I've been waiting to ask you...</p>

            <div className="button-container">
              <button className="yes-button" onClick={handleYesClick}>
                Yes!
              </button>
              <EvasiveButton onClick={() => {}} />
            </div>
          </div>
        )}

        {stage === 'card' && (
          <div className="card-stage">
            <ValentineECard
              recipientName={RECIPIENT_NAME}
              senderName={SENDER_NAME}
              message={MESSAGE}
            />
            <button className="start-over-button" onClick={handleStartOver}>
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ValentinePage;
