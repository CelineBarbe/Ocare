// == Import npm
import React from 'react';

// == Import
import './nav.scss';

import home from 'src/assets/icones/home.svg'
import settings from 'src/assets/icones/settings.svg'
import cabinet from 'src/assets/icones/cabinet.svg'

// == Composant
const Nav = () => {
  return <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <img src={home} alt="home" className="navbar-img"/>
          </li>
          <li className="navbar-li">
            <img src={cabinet} alt="home" className="navbar-img"/>
          </li>
          <li className="navbar-li">
            <img src={settings} alt="home" className="navbar-img"/>
          </li>
        </ul>
  </nav>
};

// == Export
export default Nav;
