import React, { Fragment, useEffect, useState } from 'react';

// == Import
import './tourEntryModal.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/checkWhite.svg';

//== Import data -> array medical acte
import { data } from 'src/utils/data';

const TourEntryModal = ({
  closeModalAddPatient,
  closeModalEntry,
  planned_date,
  ending_date,
  observations,
  daily,
  done,
  tags,
  isCreated,
  changeField,
  handleLogbook,
  patientId,
  id,
  time,
  done_date,
  date,
  medical_act_name,
  submitUpdateTour,

}) => {

  const Select = () => {
    return (
      <select value={medical_act_name} id="medical_act_name" name="medical_act_name" onChange={handleChange} className="form-input create-patient-select big" placeholder="Choisissez un soin">
       {
        data.map((acte,index) => (
          <option key={acte} index={index} value={acte}>{acte}</option>
        )
        )
       } 
      </select>
    )
  } 

  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  }

  const handleChecked = (event) => {
    changeField(event.target.checked, event.target.name);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Je suis dans handleSubmit")
    handleLogbook(patientId, id);
    closeModalEntry();
    closeModalAddPatient();
  };


  return (
    <div className="tour-modal-entry">
    <form className="form" onSubmit={handleSubmit}>
    <p className="modal-entry-patient-title">Ajouter un soin</p>

    <Select />
    <input
      className="form-input big"
      type="text"
      name="observations"
      placeholder="Observations"
      value={observations}
      onChange={handleChange}
    /> 

    <div className="formulaire-button" onClick={handleSubmit} >
      <span className="formulaire-button-title">Valider</span>
      <img className="formulaire-button-img" src={check} alt="valider"/>
    </div>
  </form>
  </div>
  )
};

export default TourEntryModal;
