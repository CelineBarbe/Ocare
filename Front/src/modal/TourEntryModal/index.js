import React, { Fragment, useEffect, useState } from 'react';

// == Import
import './tourEntryModal.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';

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

}) => {

  const Select = () => {
    return (
      <select value={medical_act_name} id="medical_act_name" name="medical_act_name" onChange={handleChange} className="select" placeholder="Choisissez un soin">
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
    handleLogbook(patientId, id);
    closeModalEntry();
    closeModalAddPatient();
  };

  const onFocus = (event) => {
    event.currentTarget.type = "date";
  }

  return (
    <div className="modal-entry">
    <form className="form" onSubmit={handleSubmit}>
    <img onClick={closeModalEntry} src={close} className="modal-patient-close" alt="close"/>

    <Select />
    <input
      className="form-input"
      type="text"
      name="observations"
      placeholder="Observations"
      value={observations}
      onChange={handleChange}
    /> 

    <img className="modal-patient-update-img" src={check} alt="valider" onClick={handleSubmit}/>
  </form>
  </div>
  )
};

export default TourEntryModal;
