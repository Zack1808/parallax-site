import React from "react";

// Importing the style file
import "./Segment.css";

// Creating the Segment component
const Segment = ({ paragraphs = [] }) => {
  return (
    <div className="segment-container">
      <div className="segment-content">
        {paragraphs && paragraphs.map((paragraph) => <p>{paragraph}</p>)}
      </div>
    </div>
  );
};

// Exporting the Segment component
export default Segment;
