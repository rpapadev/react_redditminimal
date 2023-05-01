import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className='logo-container'>
        <img className="logo" src="/logo.png" alt="logo" />
        <h1 className="company-name">Reddit<span>Minimal</span></h1>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Pesquisar..."/>
        <button type="submit"><i className="fa fa-search"></i></button>
      </div>
    </div>
  );
}

export default Header;