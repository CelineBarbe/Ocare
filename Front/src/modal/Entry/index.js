import React, { Fragment, useEffect, useState } from 'react';

// == Import
import './entryModal.scss';

//== Import data -> array medical acte
import { data } from 'src/utils/data';

//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/checkWhite.svg';

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
  done_date,
  medical_act_name

}) => {

  const Select = () => {
    return (
      <select value={medical_act_name} id="medical_act_name" name="medical_act_name" onChange={handleChange} className="form-input create-patient-select" placeholder="Choisissez un soin">
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
    console.log('planned date dans submit', planned_date);
    handleLogbook(patientId, id);
    closeModalEntry();
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
      className="form-input big"
      type="text"
      name="observations"
      placeholder="Observations"
      value={observations}
      onChange={handleChange}
    />
    <div className=" form-input big">
      <label htmlFor="isQuotidien">Ajouter dates</label>
      <input 
        type="checkbox" 
        id="date" 
        name="daily"
        onChange={handleChecked}
        value={daily}
      />
    </div>


    {daily
      ?
      <Fragment>
      <input
      className="form-input big"
      type="text"
      onFocus={onFocus}
      name="planned_date"
      onChange={handleChange}
      value={planned_date}
      placeholder="Date de début du soin"
    />
    <input
      className="form-input big"
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
    
    <div className="submit-update" onClick={handleSubmit} >
      <span className="modal-patient-update-img-title">Valider</span>
      <img className="modal-patient-update-img" src={check} alt="valider"/>
    </div>
  </form>
  </div>
  )
};

export default EntryModal;
