import React from "react";
import { useInView } from "react-intersection-observer";

// Importing the style file
import "./Paragraph.css";

// Creating the Paragraph component
const Paragraph = ({ children }) => {
  // Setting up the view ref
  const [ref, inView] = useInView({
    threshold: 0.15,
  });

  return (
    <p ref={ref} className={inView ? "visible" : ""}>
      {children}
    </p>
  );
};

// Exporting the Paragraph component
export default Paragraph;
