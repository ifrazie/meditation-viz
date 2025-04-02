import React, { useState } from "react";
import MeditationTimer from "./components/MeditationTimer";
import "./styles/App.css"; // Add a new CSS file for global styles

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1>Meditation Timer</h1>
      <MeditationTimer />
      <p>Focus on your breathing and relax.</p>
      <footer>
        <p>© 2023 Meditation Timer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
