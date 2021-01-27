// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import {data} from 'src/utils/data';
// == Import
import './tour.scss';

// == Composant
const Tour= ({
  list
}) => {

 /*composant défaut lorsqu'il n'y a pas de tournée de prévue */
const DefaultComponant = () => {
  return (
    <h1 className="default-title">Aucune tournée pour aujourd'hui</h1>
  )
}


  return ( 
  <div className="tour">
    <Link to='/tour'>
      <p className="tour-title">Ma tournée </p>
    </Link>
    <ul className="tour-ul">
    { 
    data.length>1 
    ? data.map(patient =>
        <Link to={`/patient/${patient.id}`}>
        <li className="tour-li" key={patient.id}>
          <span className="tour-span-name">{patient.nom}</span>
          <span className="tour-span-tag">{patient.tag}</span>
        </li>
      </Link>
      )
    : <DefaultComponant/>   
    }
     {/* <Link to="/patient">
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
      </li> */}
    </ul>
  </div>
  )
};

// == Export
export default Tour;
