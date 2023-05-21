import React from "react";

// Importing the style file
import "./Hero.css";

// Creating the Hero component
const Hero = React.forwardRef(
  (
    {
      foreground = "",
      background = "",
      title = "Title",
      foregroundSide = "left",
    },
    ref
  ) => {
    // separating the refs
    const { titleRef, backgroundRef } = ref;
    return (
      <div className="hero-container">
        <img src={background} className="background" ref={backgroundRef} />
        <img src={foreground} className={`foreground ${foregroundSide}`} />
        <h1 ref={titleRef}>{title}</h1>
      </div>
    );
  }
);

// Exporting the Hero component
export default Hero;
