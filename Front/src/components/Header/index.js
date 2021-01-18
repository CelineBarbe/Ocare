// == Import npm
import React from 'react';

// == Import
import './header.scss';
import logo from 'src/assets/images/logo.svg';
import avatar from 'src/assets/icones/avatar.svg';
import triangle from 'src/assets/icones/header_triangle.svg';

// == Composant
const Header = () => {
  return <header className="header">
            <ul className="header-ul">
            
              <li className="header-home">
                <img src={logo} alt="logo" className="header-img-logo" />
              </li>
              
              <li className="header-title">
                Cabinet Rubio
                <img src={triangle} alt="logo" className="header-img-triangle" />
              </li>
              
              <li className="header-profil">
                <img src={avatar} alt="avatar" className="header-img-avatar"/>
              </li>
        </ul>
  </header>
};

// == Export
export default Header;
