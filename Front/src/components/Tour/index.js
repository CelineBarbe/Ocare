// == Import npm
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
var { DateTime } = require('luxon');
// == Import
import './tour.scss';

import check from 'src/assets/icones/checkWhite.svg'

// == Composant
const Tour= ({
  list,
  isLoading,
  getTour,
  updateTourDone,
  updateTourDoneOk,
  changeDate,
  default_cabinet,
  isLoadingCab,
}) => {
    
  const date = DateTime.local().toISODate();
  let [cards,setCards] = useState([]);
  
  useEffect(() => {
    if (default_cabinet && !isLoadingCab){
    changeDate(date);
    getTour(); 
    }
  },[default_cabinet, isLoadingCab])

 
  //cas du create tournée, alimente les cartes si liste chargée change
  useEffect(()=> {
    if(!isLoading) {
      setCards(list.filter(el => el.done===false));
    }
    console.log('cards:', cards);
  },[list])  

  //gestion doubleclick maj de la liste
 const handleDoubleClick = (event,id) => {
  console.log('coucou de dbclick, id vaut:', id)
  //appel MAJ API
  updateTourDone(id);
  //MAJ reducer sans attendre la reponse serveur
  updateTourDoneOk(cards,id);
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
    <h1 className="default-title-tour">Aucune tournée pour aujourd'hui</h1>
  )
}


  return ( 
  <div className="tour-container">
    <Link to='/tour'>
        <p className="tour-title">Ma Tournée </p>
    </Link>
    <div className="tour"> 
      <ul className="tour-ul">
      { 
      cards.length >= 1 && !isLoading
      ? cards.map(patient =>
          <li className="tour-li" key={patient.logbook_id}>
            <Link to={`/patient/${patient.patient_id}`}  >
            <p className="tour-span-name">{patient.lastname} </p>
            <p className="tour-span-name">{patient.firstname}</p>
            </Link>
            <span className="tour-span-tag" onDoubleClick={e => handleDoubleClick(e,patient.logbook_id)}>{patient.medical_act_name} </span>
            <img className="tour-check" src={check} alt="valider"/>
          </li>
              )
      : <DefaultComponant/>  
      }
    </ul>
    </div>
  </div>
  )
};

// == Export
export default Tour;
