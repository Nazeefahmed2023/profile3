import React, { useEffect, useRef } from "react";
import AboutContent from "../Components/AboutContent";
import MyImage from "../Components/MyImage";
import "../Style/About.css";

export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="About-content">
          <AboutContent />
        </div>
        <div className="My-image">
          <MyImage />
        </div>
      </div>
    </>
  );
}
