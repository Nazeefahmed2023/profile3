import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProjectImage({ image }) {
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if the device is mobile based on the screen width
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);

      // Animating the project image when it enters the viewport
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 }, // Initial state: invisible and scaled down
        {
          opacity: 1,
          scale: 1, // Final state: fully visible and scaled to original size
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%', // Trigger when the image reaches 80% of the viewport
          },
        }
      );
    }
  }, []);

  return (
    <div className="projectimage" ref={imageRef}>
      <img src={image} alt="Project" />
    </div>
  );
}
