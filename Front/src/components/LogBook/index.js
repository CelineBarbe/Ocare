import React, { Fragment, useEffect } from 'react';

// == Import fichier scss
import './logBook.scss';

import { DateTime } from "luxon";

// == Import images
import wave from 'src/assets/icones/wave.svg';
import pill from 'src/assets/icones/pill.svg';
import bandage from 'src/assets/icones/bandage.svg';

//== Import modal
import EntryModal from 'src/containers/EntryModal';

const LogBook = ({
  entryModal, 
  closeModalEntry, 
  list,
  patientId
}) => {

useEffect(() => {
    SortList();
}, [list]) 

console.log(list);

const SortList = () => {
  if(list.length >= 1) {
   let newList =  list.slice().sort((a, b) => DateTime.fromISO(b.planned_date).toISODate() > DateTime.fromISO(a.planned_date).toISODate() ? 1: -1)

   return newList
  } else {
    return list
  }
}
/*composant défaut lorsqu'il n'y a pas de log présent */
const DefaultComponant = () => {
  return (
    <h1 className="default-title">Aucune information, ajouter une entrée</h1>
  )
}

  return ( 
    <div className="carnet-sante-container">
      {
        entryModal ? <EntryModal closeModalEntry={closeModalEntry} patientId={patientId} /> : null
      }

      { list.length >= 1 
        ? SortList().map((list, index) => (
              <div className="carnet-sante-entry" key={index}>
                <div className="carnet-sante-entry-top">
                  <div className="carnet-sante-entry-top-icone">
                    <img src={pill} className="carnet-sante-entry-top-icone-img" alt="icone"/>
                  </div>
                  <div className="carnet-sante-entry-top-care">
                    <div className="carnet-sante-entry-top-care-top">
                      <h3 className="carnet-sante-entry-top-care-top-title">{list.medical_act_name}</h3>
                      <span className="carnet-sante-entry-top-care-top-name">{list.nurse_firstname}</span>
                    </div>
                    <div className="carnet-sante-entry-top-care-bottom">
                      <span className="carnet-sante-entry-top-care-bottom-date">
                        {DateTime.fromISO(list.planned_date).toLocaleString()}
                      </span>
                    </div> 
                  </div>
                </div>
                <div className="carnet-sante-entry-bottom">
                  <div className="carnet-sante-entry-bottom-left">
                    <div className="carnet-sante-entry-bottom-left-border"></div>
                  </div>
                  <div className="carnet-sante-entry-bottom-right">
                    <span className="carnet-sante-entry-bottom-right-observation">
                      {list.observations}
                    </span>
                  </div>
                </div>
              </div>  
        ))
        : <DefaultComponant /> 
      }
    </div>
  )
};

export default LogBook;
