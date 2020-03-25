import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="main-nav">
      <h1 className="brand"><Link to="/">Technical Reading</Link></h1>
      <ul className="nav-list">
        <li><Link to="/login" className="nav-link">Sign in</Link></li>
        <li><Link to="/signup"><Button text="Get Started" btn="btn-success" /></Link></li>
      </ul>
    </nav>
  );
}

export default Header;