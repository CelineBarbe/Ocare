import React, { Fragment, useEffect, useState } from 'react';

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
  patientId,
  id,
  time,
  done_date

}) => {

  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  }

  const handleChecked = (event) => {
    changeField(event.target.checked, event.target.name);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogbook(patientId, id);
  };

  const onFocus = (event) => {
    event.currentTarget.type = "date";
  }

  return (
    <div className="modal-entry">
    <form className="form" onSubmit={handleSubmit}>
    <img onClick={closeModalEntry} src={close} className="modal-patient-close" alt="close"/>

    <select id="tags" name="tags" onChange={handleChange} className="select" placeholder="Choisissez un soin">
        <option value="injection">Prélèvement / Injection</option>
        <option value="pansement">Pansements</option>
        <option value="pansement lourd">Pansements lourds</option>
        <option value="sonde">Pose de sonde</option>
        <option value="soin respiratoire">Soins Respiratoire</option>
        <option value="soin urinaire">Soins génito-urinaire</option>
        <option value="soin digestif">Soins digestif</option>
        <option value="soin cutane">Soins cutanée</option>
        <option value="surveillance">Surveillance</option>
    </select>
    <input
      className="form-input"
      type="text"
      name="observations"
      placeholder="Observations"
      value={observations}
      onChange={handleChange}
    />
    <input type="checkbox" id="date" name="daily" onChange={handleChecked} value={daily}
    />
    <label htmlFor="isQuotidien">Ajouter dates</label>
    {daily
      ?
      <Fragment>
      <input
      className="form-input"
      type="text"
      onFocus={onFocus}
      name="planned_date"
      onChange={handleChange}
      value={planned_date}
      placeholder="Date de début du soin"
    />
    <input
      className="form-input"
      type="text"
      onFocus={onFocus}
      name="ending_date"
      onChange={handleChange}
      value={ending_date}
      placeholder="Date de fin du soin"
    />
    </Fragment>
     : null
    }
    
    <button type="button" className="form-button" onClick={handleSubmit}>
      Ajouter
    </button>
  </form>
  </div>
  )
};

export default EntryModal;
