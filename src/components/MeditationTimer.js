import React, { useState, useEffect } from 'react';
import '../styles/MeditationTimer.css';

/**
 * A meditation timer component that guides users through inhale, hold, and exhale phases.
 * Allows users to set a custom duration, start, pause, and reset the timer.
 * Includes visual breathing animations for better guidance.
 */
const MeditationTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Initial timer duration in seconds
  const [isActive, setIsActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [customDuration, setCustomDuration] = useState(60);

  /**
   * Handles the countdown timer logic.
   * Decrements the timer every second when active.
   */
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

  /**
   * Handles the breathing phase transitions (inhale, hold, exhale).
   * Changes the phase every 5 seconds when the timer is active.
   */
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

  /**
   * Updates the custom duration for the timer.
   * @param {Event} e - The input change event.
   */
  const handleCustomDurationChange = (e) => {
    setCustomDuration(Number(e.target.value));
  };

  /**
   * Starts the timer with the custom duration.
   */
  const startTimer = () => {
    setTimeLeft(customDuration);
    setIsActive(true);
  };

  /**
   * Pauses the timer.
   */
  const pauseTimer = () => {
    setIsActive(false);
  };

  /**
   * Resets the timer to its initial state.
   */
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(customDuration);
    setBreathingPhase('inhale');
  };

  /**
   * Formats the timer display in MM:SS format
   * @returns {string} - Formatted time
   */
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`meditation-timer ${breathingPhase}`} role="main" aria-label="Meditation Timer">
      <div className="timer-display" aria-live="polite">
        {formatTime()}
      </div>
      
      <div className="breathing-animation" aria-live="polite">
        {breathingPhase.charAt(0).toUpperCase() + breathingPhase.slice(1)}
      </div>
      
      <div className="breathing-guide" aria-live="polite">
        {breathingPhase === 'inhale' && "Breathe in deeply through your nose..."}
        {breathingPhase === 'hold' && "Hold your breath gently..."}
        {breathingPhase === 'exhale' && "Release slowly through your mouth..."}
      </div>
      
      <div className="duration-container">
        <label htmlFor="duration-input" className="duration-label">Session Duration (seconds):</label>
        <input
          id="duration-input"
          type="number"
          value={customDuration}
          onChange={handleCustomDurationChange}
          min="10"
          max="3600"
          className="custom-duration-input"
          aria-label="Set custom timer duration"
          disabled={isActive}
        />
      </div>
      
      <div className="controls">
        <button 
          onClick={startTimer} 
          disabled={isActive} 
          className="timer-btn"
          aria-label="Start Timer"
        >
          Start
        </button>
        <button 
          onClick={pauseTimer} 
          disabled={!isActive} 
          className="timer-btn"
          aria-label="Pause Timer"
        >
          Pause
        </button>
        <button 
          onClick={resetTimer} 
          className="timer-btn reset"
          aria-label="Reset Timer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default MeditationTimer;