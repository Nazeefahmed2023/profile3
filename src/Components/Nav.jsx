import React, { useState } from 'react';
import {
  RoofingOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
  DesignServicesOutlined,
  SourceOutlined,
  EmailOutlined,
} from '@mui/icons-material';
import '../Style/Nav.css';

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { id: 0, icon: <RoofingOutlined />, label: 'Home', section: 'home' },
    { id: 1, icon: <PersonOutlineOutlined />, label: 'About', section: 'about' },
    { id: 2, icon: <SettingsOutlined />, label: 'Services', section: 'services' },
    { id: 3, icon: <DesignServicesOutlined />, label: 'Skills', section: 'skills' },
    { id: 4, icon: <SourceOutlined />, label: 'Projects', section: 'projects' },
    { id: 5, icon: <EmailOutlined />, label: 'Contact', section: 'contact' },
  ];

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e, id, section) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveIndex(id);
      handleScroll(section);
    }
  };

  return (
    <nav>
      <ul className="nav-ul">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeIndex === item.id ? 'active' : ''}
            onClick={() => {
              setActiveIndex(item.id);
              handleScroll(item.section);
            }}
            onKeyDown={(e) => handleKeyDown(e, item.id, item.section)}
            tabIndex={0} // Make focusable
            aria-label={item.label} // Screen reader support
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
