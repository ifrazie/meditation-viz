import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MeditationTimer from "./components/MeditationTimer";
import "./styles/App.css";

/**
 * The main application component for Meditation Viz.
 * Includes a dark mode toggle, an image carousel, and the meditation timer.
 */
function App() {
  const [darkMode, setDarkMode] = useState(false);

  /**
   * Toggles the dark mode state between light and dark themes.
   */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="app-container">
        <header className="app-header">
          <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <h1 className="app-title">Mindful Moments</h1>
          <p className="app-description">
            Take a moment to breathe, focus, and find your center. Use our guided 
            meditation timer to practice mindfulness throughout your day.
          </p>
        </header>

        {/* Image carousel displaying soothing images */}
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false}
          showStatus={false}
          interval={6000}
          transitionTime={1000}
          stopOnHover={true}
        >
          <div>
            <img src="/images/soothing1.jpg" alt="Peaceful mountain landscape" />
          </div>
          <div>
            <img src="/images/soothing2.jpg" alt="Calming ocean waves" />
          </div>
          <div>
            <img src="/images/soothing3.jpg" alt="Serene forest path" />
          </div>
          <div>
            <img src="/images/soothing4.jpg" alt="Tranquil lake reflection" />
          </div>
        </Carousel>

        {/* Meditation Timer Component */}
        <MeditationTimer />
        
        <p className="meditation-tip">
          Focus on your breathing and let thoughts come and go without judgment.
        </p>
        
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Nekura Systems. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
