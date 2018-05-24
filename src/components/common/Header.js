import React from 'react';

import "./Header.css";
import logo from './logo.png';

const containerStyle = {
  fontSize: '40px'
}

const Header = () => {
  return (
    <div style={containerStyle} className="Header">
      <img src={logo} alt="logo" className="Header-logo"/>
    </div>
  );
}

export default Header;
