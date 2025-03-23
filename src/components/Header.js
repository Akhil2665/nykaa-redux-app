import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1 className='logo-name'>Nykaa</h1>
      </div>
      <nav className="nav">
        <ul className='nav-header'>
          <li ><a href="#makeup" className='nav-item'>Makeup</a></li>
          <li><a href="#skin" className='nav-item'>Skin</a></li>
          <li ><a href="#hair" className='nav-item'>Hair</a></li>
          <li ><a href="#fragrances" className='nav-item'>Fragrances</a></li>
        </ul>
      
      <div className="search">
        <input type="text" placeholder="Search on Nykaa" className='input' />
        <button className='search-icon'>🔍</button>
      </div>
      </nav>
    </header>
  );
};

export default Header;
