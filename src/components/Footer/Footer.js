import React from "react";
import { useInView } from "react-intersection-observer";

// Importing the style file
import "./Footer.css";

// Creating the Footer component
const Footer = () => {
  // Setting up the inView ref
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="footer-container">
      <span className={inView ? "visible" : ""}>&copy; JPN</span>
    </div>
  );
};

// Exporting the Footer component
export default Footer;
