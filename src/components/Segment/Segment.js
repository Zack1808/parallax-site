import React from "react";

// Importing the costume components
import Paragraph from "./Paragraph/Paragraph";

// Importing the style file
import "./Segment.css";

// Creating the Segment component
const Segment = ({ paragraphs = [] }) => {
  return (
    <div className="segment-container">
      <div className="segment-content">
        {paragraphs &&
          paragraphs.map((paragraph) => <Paragraph>{paragraph}</Paragraph>)}
      </div>
    </div>
  );
};

// Exporting the Segment component
export default Segment;
