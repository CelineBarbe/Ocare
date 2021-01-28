// == Import npm
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
var { DateTime } = require('luxon');
// == Import
import './tour.scss';

// == Composant
const Tour= ({
  list,
  isLoading,
  getTour,
  updateTourDone,
  updateTourDoneOk,
  changeDate

}) => {
    
  const date = DateTime.local().toISODate();
  let [cards,setCards] = useState([]);
  
  useEffect(() => {
    changeDate(date);
    getTour();
  },[])

  //cas du create tournée, alimente les cartes si liste chargée change
  useEffect(()=> {
  if (!isLoading) {
  
   setCards(list);
  }
  },[list])  

 const handleDoubleClick = (event,id) => {
   console.log('coucou');
   //TODO MW UPDATE...
   updateTourDone(id);
 }
/* 
  useEffect(()=> {
    console.log("Je suis dans isLoading")
  //je mets à jours mes cards en fonction de la reception de la nouvelle liste
    if (!isLoading) {
      setCards(list)
    }
  } ,[isLoading]) */



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
    list.length>1 
    ? list.map(patient =>
        <li className="tour-li" key={patient.logbook_id}>
          <Link to={`/patient/${patient.id}`}  >
          <span className="tour-span-name">{patient.lastname}</span>
          </Link>
          <div className="tour-span-tag" onDoubleClick={e => handleDoubleClick(e,patient.logbook_id)}>{patient.medical_act_name} </div>
        </li>
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
