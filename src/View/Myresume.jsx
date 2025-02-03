import React, { useEffect, useRef } from 'react';
import '../Style/resume.css';
import { ArrowOutwardOutlined } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Myresume() {
  const resumeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Conditional animations for larger screens
    if (window.innerWidth > 768) {
      // Animating the circle
      gsap.fromTo(
        resumeRef.current.querySelector('.circle'),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'bounce.out',
          scrollTrigger: {
            trigger: resumeRef.current.querySelector('.circle'),
            start: 'top 80%',
          },
        }
      );

      // Animating the experience items
      gsap.fromTo(
        resumeRef.current.querySelectorAll('.experience-item'),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: resumeRef.current,
            start: 'top 90%',
          },
        }
      );

      // Animating the icons
      gsap.fromTo(
        resumeRef.current.querySelectorAll('.icon'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: resumeRef.current,
            start: 'top 85%',
          },
        }
      );
    } else {
      // Ensure elements are visible on smaller screens
      const elements = resumeRef.current.querySelectorAll('.circle, .experience-item, .icon');
      elements.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform = 'none';
      });
    }
  }, []);

  const handleNavigationNexion = () => {
    window.open('', '_blank');
  };
  const handleNavigationHelppme = () => {
    window.open('https://github.com/Nazeefahmed2023', '_blank');
  };
  const handleNavigationAspira = () => {
    window.open('https://aspirasys.com/', '_blank');
  };

  return (
    <div className="resume" ref={resumeRef}>
      <div className="circle">
        <h6>*</h6>
      </div>
      <div className="resumedata">
        <h4 className="resume-h4">My Resume</h4>
        <h2 className="resume-h2">
          Real <span>Problem Solution</span>
          <br />
          Experience
        </h2>

        <div className="experience">
          <div className="icon" onClick={handleNavigationNexion}>
            <ArrowOutwardOutlined />
          </div>
          <div className="experience-item">
            <h3>2024-Present</h3>
            <h4></h4>
            <h5></h5>
          </div>

          <div className="icon" onClick={handleNavigationAspira}>
            <ArrowOutwardOutlined />
          </div>
          <div className="experience-item">
            <h3>3-Months (Intern)</h3>
            <h4>Backend Developer</h4>
            <h5>AspiraSys</h5>
          </div>

          <div className="icon" onClick={handleNavigationHelppme}>
            <ArrowOutwardOutlined />
          </div>
          <div className="experience-item">
            <h3>2024-Present</h3>
            <h4>Technical Support Team Lead</h4>
            <h5></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
