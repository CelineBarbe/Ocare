// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import
import './header.scss';
import logo from 'src/assets/images/logo.svg';
import avatar from 'src/assets/icones/avatar.svg';
import triangle from 'src/assets/icones/header_triangle.svg';

// == Composant
const Header = () => (
  <header className="header">
    <ul className="header-ul">

      <li className="header-home">
        <Link to="/">
          <img src={logo} alt="logo" className="header-img-logo" />
        </Link>
      </li>

      <li className="header-title">
        Cabinet Rubio
        <img src={triangle} alt="logo" className="header-img-triangle" />
      </li>

      <li className="header-profil">
        <Link to="/Profil">
          <img src={avatar} alt="avatar" className="header-img-avatar" />
        </Link>
      </li>
    </ul>
  </header>
);

// == Export
export default Header;
