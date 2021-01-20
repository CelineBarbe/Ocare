// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './tour.scss';


// == Composant
const Tour= () => {
  return <div className="tour">
    <p className="tour-title">Ma tournée </p>
    <ul className="tour-ul">
      <Link to="/patient">
        <li className="tour-li">
          <span className="tour-span-date">06:00</span>
          <span className="tour-span-name">Mr Pichon</span>
          <span className="tour-span-tag">Pansement</span>
        </li>
      </Link>
      <li className="tour-li">
        <span className="tour-span-date">07:00</span>
        <span className="tour-span-name">Mme Paco</span>
        <span className="tour-span-tag">Toilette</span>
      </li>
      <li className="tour-li">
        <span className="tour-span-date">08:00</span>
        <span className="tour-span-name">Mr Robillard</span>
        <span className="tour-span-tag">Injection</span>
      </li>
      <li className="tour-li">
        <span className="tour-span-date">09:00</span>
        <span className="tour-span-name">Mme Vidal</span>
        <span className="tour-span-tag">Prise de sang</span>
      </li>
    </ul>
  </div>
};

// == Export
export default Tour;
