// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import
import './nav.scss';

import home from 'src/assets/icones/home.svg';
import settings from 'src/assets/icones/settings.svg';
import cabinet from 'src/assets/icones/cabinet.svg';
import patients from 'src/assets/icones/patients.svg';

// == Composant
const Nav = () => (
  <nav className="navbar">
    <ul className="navbar-ul">
      <Link to="/dashboard">
        <li className="navbar-li">
          <img src={home} alt="home" className="navbar-img" />
        </li>
      </Link>
      <Link to="/patients">
        <li className="navbar-li">
          <img src={patients} alt="patient" className="navbar-img" />
        </li>
      </Link>
      <Link to="/cabinet">
        <li className="navbar-li">
          <img src={cabinet} alt="cabinet" className="navbar-img" />
        </li>
      </Link>
      <Link to="/cabinets">
        <li className="navbar-li">
          <img src={settings} alt="settings" className="navbar-img" />
        </li>
      </Link>
    </ul>
  </nav>
);

// == Export
export default Nav;
