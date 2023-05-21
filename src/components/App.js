import React, { useRef, useEffect } from "react";

// Importing the costume components
import Hero from "./Hero/Hero";
import Segment from "./Segment/Segment";

// Importing the style file
import "./App.css";

// Importing the images
import earthBg from "../images/earth_bg.jpg";
import earth from "../images/earth.png";
import earth2Bg from "../images/earth2_bg.jpg";
import earth2 from "../images/earth2.png";

// Creating the App component
const App = () => {
  // Setting up the ref
  const scrollRef = useRef();
  const titleRef1 = useRef();
  const backgroundRef1 = useRef();
  const titleRef2 = useRef();
  const backgroundRef2 = useRef();

  // Setting up the paragraph list
  const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe accusantium, magni velit quia possimus quidem sed laborum quaerat autem iste sint error reprehenderit animi amet qui tempore deserunt commodi eum maiores! Porro ratione laboriosam praesentium sequi ducimus autem officiis quas. Laborum expedita quae ea excepturi debitis. Mollitia exercitationem totam possimus aliquid maxime recusandae placeat, facilis consectetur dolorem nemo fuga vero sequi! Dicta architecto nihil qui corporis maiores expedita dolorem, labore illo ipsa consectetur culpa dolore natus iure tenetur a omnis cupiditate minus? Aperiam molestias voluptate, veniam nulla debitis sint ducimus ipsum rerum ut accusantium cum modi blanditiis, deserunt voluptates officiis tempore soluta quidem inventore alias aspernatur maiores? Delectus sapiente sunt, voluptas numquam ex sint cumque rerum totam mollitia natus officia ipsam aliquid eaque odit quos possimus et nobis ullam error. Dolorem cupiditate ab beatae laudantium distinctio necessitatibus fuga, labore doloribus. Saepe earum impedit, eos vel dolor illo. Asperiores, dolorum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe accusantium, magni velit quia possimus quidem sed laborum quaerat autem iste sint error reprehenderit animi amet qui tempore deserunt commodi eum maiores! Porro ratione laboriosam praesentium sequi ducimus autem officiis quas. Laborum expedita quae ea excepturi debitis. Mollitia exercitationem totam possimus aliquid maxime recusandae placeat, facilis consectetur dolorem nemo fuga vero sequi! Dicta architecto nihil qui corporis maiores expedita dolorem, labore illo ipsa consectetur culpa dolore natus iure tenetur a omnis cupiditate minus? Aperiam molestias voluptate, veniam nulla debitis sint ducimus ipsum rerum ut accusantium cum modi blanditiis, deserunt voluptates officiis tempore soluta quidem inventore alias aspernatur maiores? Delectus sapiente sunt, voluptas numquam ex sint cumque rerum totam mollitia natus officia ipsam aliquid eaque odit quos possimus et nobis ullam error. Dolorem cupiditate ab beatae laudantium distinctio necessitatibus fuga, labore doloribus. Saepe earum impedit, eos vel dolor illo. Asperiores, dolorum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe accusantium, magni velit quia possimus quidem sed laborum quaerat autem iste sint error reprehenderit animi amet qui tempore deserunt commodi eum maiores! Porro ratione laboriosam praesentium sequi ducimus autem officiis quas. Laborum expedita quae ea excepturi debitis. Mollitia exercitationem totam possimus aliquid maxime recusandae placeat, facilis consectetur dolorem nemo fuga vero sequi! Dicta architecto nihil qui corporis maiores expedita dolorem, labore illo ipsa consectetur culpa dolore natus iure tenetur a omnis cupiditate minus? Aperiam molestias voluptate, veniam nulla debitis sint ducimus ipsum rerum ut accusantium cum modi blanditiis, deserunt voluptates officiis tempore soluta quidem inventore alias aspernatur maiores? Delectus sapiente sunt, voluptas numquam ex sint cumque rerum totam mollitia natus officia ipsam aliquid eaque odit quos possimus et nobis ullam error. Dolorem cupiditate ab beatae laudantium distinctio necessitatibus fuga, labore doloribus. Saepe earum impedit, eos vel dolor illo. Asperiores, dolorum.",
  ];

  // Function that will handle the moving of the text
  const scrollEfect = () => {
    if (titleRef1 && titleRef1.current) {
      titleRef1.current.style.marginRight = `${scrollRef.current.scrollTop *
        0.03}vw`;
      backgroundRef1.current.style.marginLeft = `${scrollRef.current.scrollTop *
        0.003}vw`;
    }
    if (titleRef2 && titleRef2.current) {
      titleRef2.current.style.marginLeft = `${scrollRef.current.scrollTop *
        0.03}vw`;
      backgroundRef2.current.style.marginLeft = `${scrollRef.current.scrollTop *
        0.003}vw`;
    }
  };

  // Setting up the event listener
  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.addEventListener("scroll", scrollEfect);
      return function cleanup() {
        scrollRef.current.removeEventListener("scroll", scrollEfect);
      };
    }
  }, []);

  return (
    <div className="app-container" ref={scrollRef}>
      <Hero
        background={earthBg}
        foreground={earth}
        title="Discover the undiscovered"
        ref={{ ref1: titleRef1, ref2: backgroundRef1 }}
      />
      <Segment paragraphs={paragraphs} />
      <Hero
        background={earth2Bg}
        foreground={earth2}
        foregroundSide="right"
        title="Explore"
        ref={{ ref1: titleRef2, ref2: backgroundRef2 }}
      />
      <Segment paragraphs={paragraphs} />
    </div>
  );
};

// Exporting the App component
export default App;
