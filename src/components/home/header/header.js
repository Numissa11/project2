import React from 'react';
import NavBarHome from '../navbarhome/navbarhome';
import './header.css';

const Header =({value, handleInputChange, book}) => (
  <div className="container-home-welcome-section">
    <div className="container-home-image">
      <NavBarHome 
        value={value} 
        handleInputChange={handleInputChange}
        book={book}
      />
      <h1 className="home-page-title">Get my recipe</h1>
    </div>
  </div>
);

export default Header;
