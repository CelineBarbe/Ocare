import React, { Fragment } from 'react';

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

console.log("list",list);

const tri = list.slice().sort((a, b) => DateTime.fromISO(b.creation_date).toISODate() > DateTime.fromISO(a.creation_date).toISODate() ? 1: -1);
console.log("tri", tri);

const row =  tri.map(list => (
  
                <div className="carnet-sante-entry" key={list.id}>
                  
                  <div className="carnet-sante-entry-top">
                    <div className="carnet-sante-entry-top-icone">
                      <img src={pill} className="carnet-sante-entry-top-icone-img" alt="icone"/>
                    </div>
                    <div className="carnet-sante-entry-top-care">
                      <div className="carnet-sante-entry-top-care-top">
                        <h3 className="carnet-sante-entry-top-care-top-title">Pilulier</h3>
                        <span className="carnet-sante-entry-top-care-top-name">{list.nurse_firstname}</span>
                      </div>
                      <div className="carnet-sante-entry-top-care-bottom">
                        <span className="carnet-sante-entry-top-care-bottom-date">
                        {
                          !list.planned_date
                          ? DateTime.fromISO(list.creation_date).toLocaleString()
                          : DateTime.fromISO(list.planned_date).toLocaleString()
                        }
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

  return ( 
    <div className="carnet-sante-container">
      {
        entryModal ? <EntryModal closeModalEntry={closeModalEntry} patientId={patientId} /> : null
      }

      { list.length > 0 ? row : null }
    </div>
  )
};

export default LogBook;
