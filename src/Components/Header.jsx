import React, { useRef, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { LinkedIn, Instagram, GitHub, Twitter } from '@mui/icons-material';
import gsap from 'gsap';
import '../Style/Header.css';
import '../Style/Theme.css';

const DarkModeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(5px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: '#8796A5',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#070707',
    width: 32,
    height: 32,
    '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139z"/></svg>')`,
      },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // References for animations
  const brandRef = useRef(null);
  const socialIconsRef = useRef(null);
  const themeRef = useRef(null);

  // Dark mode effect
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  // GSAP Animations
  useEffect(() => {
    gsap.fromTo(
      brandRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );

    gsap.fromTo(
      socialIconsRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power4.out' }
    );

    gsap.fromTo(
      themeRef.current,
      { scale: 0 },
      { scale: 1, duration: 1, ease: 'back.out(1.7)' }
    );
  }, []);

  const handleChange = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Box>
      <div className="header">
        <div className="Brand" ref={brandRef}>
          <h2>nazeef-ahmed </h2>
        </div>

        <div className="social-icon" ref={socialIconsRef}>
          <a
            href="linkedin.com/in/nazeef-ahmed-6a7392257"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon headericons"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.instagram.com/nazeefahmed7/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon headericons"
          >
            <Instagram />
          </a>
          <a
            href="https://github.com/Nazeefahmed2023"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon headericons"
          >
            <GitHub />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-icon headericons"
          >
            <Twitter />
          </a>
        </div>

        <div className="theme" ref={themeRef}>
          <FormControlLabel
            control={<DarkModeSwitch checked={isDarkMode} onChange={handleChange} />}
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
          />
        </div>
      </div>
    </Box>
  );
}
