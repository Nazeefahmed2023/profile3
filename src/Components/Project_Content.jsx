import React, { useEffect, useRef } from 'react';
import { ArrowOutwardOutlined } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProjectContent({ title, subtitle, description, githubLink }) {
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if the device is mobile based on the screen width
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);

      // Animating the project content when it enters the viewport
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%', // Trigger when the content reaches 80% of the viewport
          },
        }
      );
    }
  }, []);

  return (
    <div className="project-content" ref={contentRef}>
      <h4>{title}</h4>
      <h2 className="project-content-h2">{subtitle}</h2>
      <p>{description}</p>
      <div className="icon">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <ArrowOutwardOutlined style={{ cursor: 'pointer', fontSize: '24px' }} />
        </a>
      </div>
    </div>
  );
}
