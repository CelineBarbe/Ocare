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
    <div className="default-component">
      <span className="default-component-tag" >
        Aucune tournée pour aujourd'hui
      </span>
      <div className="default-container"></div>
    </div>
  )
}


  return ( 
  <>
    <Link to='/tour'>
      <p className="tour-title">Tournée </p> 
    </Link> 
    <div className="tour"> 
      <ul className="tour-ul">
      { 
      cards.length >= 1 && !isLoading
      ? cards.map(patient =>
          <li className="tour-li" key={patient.logbook_id}>
            <Link to={`/patient/${patient.patient_id}`}  >
            <p className="tour-span-lastname">{patient.lastname}</p>
            <p className="tour-span-firstname">{patient.firstname}</p>
            </Link>
            <span className="tour-span-tag" >{patient.medical_act_name} </span>
            <div className="check-container">
              <img className="tour-check" src={check} alt="valider" onClick={e => handleDoubleClick(e,patient.logbook_id)}/>
            </div>
          </li>
      )
      : <DefaultComponant/>  
      }
    </ul>
  </div>
  </>
  )
};

// == Export
export default Tour;
