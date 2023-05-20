import React from "react";

// Importing the style file
import "./Hero.css";

// Creating the Hero component
const Hero = ({
  foreground = "",
  background = "",
  title = "Title",
  foregroundSide = "left",
}) => {
  return (
    <div className="hero-container">
      <img src={background} className="background" />
      <img src={foreground} className={`foreground ${foregroundSide}`} />
      <h1>{title}</h1>
    </div>
  );
};

// Exporting the Hero component
export default Hero;
