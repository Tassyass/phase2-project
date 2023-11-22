import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
    <div className="nav-links">
      <div className="navbar-container">
        <Link to="/logIn" className="nav-link">Log In</Link>
        <Link to="/" className="nav-link">Home</Link>
      </div>
    </div>
    </div>
  );
};

export default NavBar;