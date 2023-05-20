import React from "react";

// Importing the costume components
import Hero from "./Hero/Hero";

// Importing the style file
import "./App.css";

// Importing the images
import earthBg from "../images/earth_bg.jpg";
import earth from "../images/earth.png";
import blackHoleBg from "../images/black_hole_bg.jpg";
import blackHole from "../images/black_hole.png";

// Creating the App component
const App = () => {
  return (
    <div className="app-container">
      <Hero background={earthBg} foreground={earth} title="Space" />
    </div>
  );
};

// Exporting the App component
export default App;
