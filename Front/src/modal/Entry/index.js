import React, { useEffect, useState } from 'react';
// == Import
import './entryModal.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';

const entryModal = ({closeModalEntry}) => {
  return (
    <div className="modal-entry">
    <form className="form">
    <img onClick={closeModalEntry} src={close} className="modal-patient-close" alt="close"/>
    <input
      className="form-input"
      type="date"
      name="planned_date"
      placeholder="Date Prévue"
     
    />
    <input
      className="form-input"
      type="date"
      name="ending_date"
      placeholder="Date de fin"
      
    />
    <input
      className="form-input"
      type="text"
      name="Observations"
      placeholder="Observations"
      
    />
    <input
      className="form-input"
      type="password"
      name="password"
      placeholder="Password"
    />
    <input
      className="form-input"
      type="phone"
      name="phone_number"
      placeholder="Téléphone"
    />
    <button type="button" className="form-button">
      Ajouter
    </button>
  </form>
  </div>
  )
};

export default entryModal;
