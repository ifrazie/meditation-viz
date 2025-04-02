import React, { useState, useEffect } from 'react';
import '../styles/MeditationTimer.css'; // Assume this contains necessary styles

const MeditationTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Initial timer duration in seconds
  const [isActive, setIsActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [customDuration, setCustomDuration] = useState(60);

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

  const handleCustomDurationChange = (e) => {
    setCustomDuration(Number(e.target.value));
  };

  const startTimer = () => {
    setTimeLeft(customDuration);
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

  return (
    <div className="meditation-timer" role="main" aria-label="Meditation Timer">
      <div className="timer-display" aria-live="polite">
        {timeLeft}s
      </div>
      <div
        className="breathing-guide"
        style={{ backgroundColor: getPhaseColor(breathingPhase) }}
        aria-live="polite"
      >
        {breathingPhase.charAt(0).toUpperCase() + breathingPhase.slice(1)}
      </div>
      <div className="controls">
        <input
          type="number"
          value={customDuration}
          onChange={handleCustomDurationChange}
          min="1"
          className="custom-duration-input"
          aria-label="Set custom timer duration"
        />
        <button onClick={startTimer} disabled={isActive} aria-label="Start Timer">
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isActive} aria-label="Pause Timer">
          Pause
        </button>
        <button onClick={resetTimer} aria-label="Reset Timer">
          Reset
        </button>
      </div>
    </div>
  );
};

export default MeditationTimer;