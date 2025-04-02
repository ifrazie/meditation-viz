import React, { useState, useEffect } from 'react';
import '../styles/MeditationTimer.css'; // Assume this contains necessary styles

const MeditationTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Initial timer duration in seconds
  const [isActive, setIsActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale');

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft <= 1) {
            clearInterval(interval);
            setIsActive(false);
            return 0;
          }
          return timeLeft - 1;
        });
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    let phaseInterval = null;
    if (isActive) {
      phaseInterval = setInterval(() => {
        setBreathingPhase((phase) => {
          switch (phase) {
            case 'inhale':
              return 'hold';
            case 'hold':
              return 'exhale';
            case 'exhale':
              return 'inhale';
            default:
              return 'inhale';
          }
        });
      }, 5000); // Change phase every 5 seconds
    }
    return () => clearInterval(phaseInterval);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(60);
    setBreathingPhase('inhale');
  };

  return (
    <div className="meditation-timer">
      <div className="timer-display">
        {timeLeft}s
      </div>
      <div className="breathing-guide" style={{ backgroundColor: getPhaseColor(breathingPhase) }}>
        {breathingPhase.charAt(0).toUpperCase() + breathingPhase.slice(1)}
      </div>
      <div className="controls">
        <button onClick={startTimer} disabled={isActive}>Start</button>
        <button onClick={pauseTimer} disabled={!isActive}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

const getPhaseColor = (phase) => {
  switch (phase) {
    case 'inhale':
      return 'green';
    case 'hold':
      return 'yellow';
    case 'exhale':
      return 'red';
    default:
      return 'green';
  }
};

export default MeditationTimer;