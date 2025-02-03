import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Irbaz from '../assets/profile1.png';
import resume from '../assets/Irbaz Resume Original.pdf';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import Nav from './Nav';
import '../Style/Hero.css';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    // Animate text
    timeline.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );

    // Animate image
    timeline.fromTo(
      imageRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1 },
      '-=0.8' // Overlap with the text animation
    );

    // Animate stats
    gsap.fromTo(
      statsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, delay: 1 }
    );
  }, []);

  const handleNavigation = () => {
    window.open('linkedin.com/in/nazeef-ahmed-6a7392257', '_blank');
  };

  return (
    <div className="Hero-section" ref={sectionRef}>
      <div className="about" ref={textRef}>
        <h3>Hello, I'm</h3>
        <span className="highlighted-name">S nazeef Ahmed</span>
        <h2 className="title">Software Engineer</h2>
        <p className="short-detail">
          A passionate software engineer specializing in Full-Stack Development and AWS-amazon web service user-friendly, responsive, and visually appealing applications that bring ideas to life.
        </p>
        <div className="button">
          <button onClick={handleNavigation}>Hire Me</button>
          <a href={resume} className="download-cv" download="nazeef Ahmed CV.pdf">
            Download CV <ArrowForwardIosOutlined className="arrow-icon" />
          </a>
        </div>
      </div>
      <div className="image">
        <div className="design"></div>
        <img
          src={Irbaz}
          alt="nazeef Ahmed - Software Engineer"
          ref={imageRef}
        />
      </div>
      <div className="data">
        <div className="data1" ref={(el) => (statsRef.current[0] = el)}>
          <h3 className="data-number">1+</h3>
          <span className="data-label">Years of Experience</span>
        </div>
        <div className="data2" ref={(el) => (statsRef.current[1] = el)}>
          <h3 className="data-number">10+</h3>
          <span className="data-label">Projects Completed</span>
        </div>
        <div className="data3" ref={(el) => (statsRef.current[2] = el)}>
          <h3 className="data-number">95%</h3>
          <span className="data-label">Client Satisfaction</span>
        </div>
      </div>
      <Nav />
    </div>
  );
}
