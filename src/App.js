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
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1>Meditation Timer</h1>
      {/* Image carousel displaying soothing images */}
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src="/images/soothing1.jpg" alt="Soothing Scene 1" />
        </div>
        <div>
          <img src="/images/soothing2.jpg" alt="Soothing Scene 2" />
        </div>
        <div>
          <img src="/images/soothing3.jpg" alt="Soothing Scene 3" />
        </div>
        <div>
          <img src="/images/soothing4.jpg" alt="Soothing Scene 4" />
        </div>
      </Carousel>
      <MeditationTimer />
      <p>Focus on your breathing and relax.</p>
      <footer>
        <p>© 2023 Nekura Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
