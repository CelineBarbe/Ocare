import React, { useEffect, useState } from 'react';
// == Import
import './entryModal.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';

const EntryModal = ({
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
  patientId

}) => {

  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  }

  const handleChecked = (event) => {
    changeField(event.target.checked, event.target.name);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogbook(patientId);
  };


  return (
    <div className="modal-entry">
    <form className="form" onSubmit={handleSubmit}>
    <img onClick={closeModalEntry} src={close} className="modal-patient-close" alt="close"/>

    <input
      className="form-input"
      type="date"
      name="planned_date"
      placeholder="Date Prévue"
      onChange={handleChange}
    />
    <input
      className="form-input"
      type="date"
      name="ending_date"
      placeholder="Date de fin"
      onChange={handleChange}
    />
    <input
      className="form-input"
      type="text"
      name="observations"
      placeholder="Observations"
      onChange={handleChange}
    />
    <button type="button" className="form-button" onClick={handleSubmit}>
      Ajouter
    </button>
  </form>
  </div>
  )
};

export default EntryModal;
