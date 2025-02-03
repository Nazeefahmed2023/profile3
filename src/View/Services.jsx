import React, { useEffect, useRef } from 'react';
import { ArrowOutwardOutlined } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Style/Services.css';

export default function Services() {
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only animate for larger screens (tablets and desktops)
    if (window.innerWidth > 768) {
      // Animate heading and subheading
      gsap.fromTo(
        servicesRef.current.querySelector('.heading-service'),
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current.querySelector('.heading-service'),
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        servicesRef.current.querySelector('.service-h2'),
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current.querySelector('.service-h2'),
            start: 'top 80%',
          },
        }
      );

      // Animate all service items with stagger effect
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.service-data'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2, // Staggered animation (delay between each item)
          scrollTrigger: {
            trigger: servicesRef.current.querySelector('.service'),
            start: 'top 80%', // Trigger when the service section is in view
            toggleActions: 'play none none reverse',
          },
        }
      );
    } else {
      // For smaller screens (mobile), ensure all elements are visible without animation
      const serviceItems = servicesRef.current.querySelectorAll('.service-data, .heading-service, .service-h2');
      serviceItems.forEach(item => {
        item.style.opacity = 1;
        item.style.transform = 'none';
      });
    }
  }, []);

  return (
    <div ref={servicesRef} className="services">
      <h4 className="heading-service">Popular Services</h4>
      <h2 className="service-h2">
        My <span>Special Services</span> For Your Business Development
      </h2>
      <div className="service">
        {/* First Column */}
        <div className="service-column">
          <div className="service-data">
            <h3>01.</h3>
            <h5>Web Development</h5>
            <p className="service-detail">Creating modern, responsive websites for your needs.</p>
            <div className="icon">
              <ArrowOutwardOutlined />
            </div>
          </div>
          <div className="service-data">
            <h3>02.</h3>
            <h5>Backend Development</h5>
            <p className="service-detail">Building scalable and secure backend systems.</p>
            <div className="icon">
              <ArrowOutwardOutlined />
            </div>
          </div>
          <div className="service-data">
            <h3>03.</h3>
            <h5>AWS-amazon web service</h5>
            <p className="service-detail">managing real time application in cloud</p>
            <div className="icon">
              <ArrowOutwardOutlined />
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="service-column">
          <div className="service-data">
            <h3>04.</h3>
            <h5>secure coding</h5>
            <p className="service-detail">ensure secure coding practice to prevent data loss</p>
            <div className="icon">
              <ArrowOutwardOutlined />
            </div>
          </div>
          <div className="service-data">
            <h3>05.</h3>
            <h5>API Integration</h5>
            <p className="service-detail">Seamlessly integrating APIs for added functionality.</p>
            <div className="icon">
              <ArrowOutwardOutlined />
            </div>
          </div>
          <div className="service-data">
            <h3>06.</h3>
            <h5>Technical Support & Maintenance</h5>
            <p className="service-detail">Providing reliable support for your systems.</p>
            <div className="icon">
              <ArrowOutwardOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
