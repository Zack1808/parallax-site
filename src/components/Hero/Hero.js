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
    const { ref1, ref2 } = ref;
    return (
      <div className="hero-container">
        <img src={background} alt="" className="background" ref={ref2} />
        <img
          src={foreground}
          alt=""
          className={`foreground ${foregroundSide}`}
        />
        <h1 ref={ref1}>{title}</h1>
      </div>
    );
  }
);

// Exporting the Hero component
export default Hero;
