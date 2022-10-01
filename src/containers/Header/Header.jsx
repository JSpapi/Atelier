import React, { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

import "./Header.scss";
function Header() {
  const [letterClass, setLetterClass] = useState("animate-text");
  const headingArray = [
    "U",
    "n",
    "i",
    "q",
    "u",
    "e",
    " ",
    "U",
    "I",
    " ",
    "K",
    "i",
    "t",
    " ",
    "T",
    "e",
    "m",
    "p",
    "l",
    "a",
    "t",
    "e",
    " ",
    "F",
    "o",
    "r",
  ];

  useEffect(()=> {
    setTimeout(() => {
      setLetterClass('animate-text-hover');
    }, 4000)
  },[])
  
  return (
    <div className="app__header" id="header">
      <div className="app__header-overlay">
        <div className="app__header-content">
          <h3 className="app__subheading" style={{ color: "#FFAE2B" }}>
            WE ARE Atelier Creative Agency
          </h3>
          <h1 className="app__header-content_title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={headingArray}
              idx={12}
            />
            Creative Agencies
          </h1>

          <a
            className="custom__btn"
            style={{ marginTop: "35px" }}
            href="#tamplates"
          >
            VIEW LAYOUTS
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
