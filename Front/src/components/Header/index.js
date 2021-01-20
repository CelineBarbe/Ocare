// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import
import './header.scss';
import logo from 'src/assets/images/logo.svg';
import triangle from 'src/assets/icones/header_triangle.svg';

// == Composant
const Header = ({avatar}) => (
  <header className="header">
    <ul className="header-ul">

      <li className="header-home">
        <Link to="/">
          <img src={logo} alt="logo" className="header-img-logo" />
        </Link>
      </li>

      <li className="header-title">
        <select className="header-title-cabinet">
          <option>Cabinet Rubio</option>
          <option>Cabinet Durand</option>
          <option>Cabinet Przybylski</option>
        </select>
      </li>

      <li className="header-profil">
        <Link to="/profil">
          <img src={avatar} alt="avatar" className="header-img-avatar" />
        </Link>
      </li>
    </ul>
  </header>
);

// == Export
export default Header;
