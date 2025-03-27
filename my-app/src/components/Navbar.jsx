import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/home">LinkedIn Clone</a>
      </div>
      <div
        className={`navbar-links ${isMobile ? 'navbar-links-mobile' : ''}`}
        onClick={() => setIsMobile(false)}
      >
        <a href="/home">Home</a>
        <a href="/profile">Profile</a>
        <a href="/jobs">Jobs</a>
        <a href="/connections">Connections</a>
      </div>
      <div className="navbar-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        <i className={`fas ${isMobile ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
});

export default Navbar;
