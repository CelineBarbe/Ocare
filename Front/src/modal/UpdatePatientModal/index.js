import React from 'react';
import {useParams} from 'react-router-dom';

import './updatePatientModal.scss';

import check from 'src/assets/icones/checkWhite.svg';
import close from 'src/assets/icones/close.svg';

const UpdatePatientModal = ({
  closeModalUpdate,
  firstname,
  lastname, 
  birthdate, 
  gender, 
  address, 
  zip_code, 
  city, 
  phone_number, 
  pathology, 
  daily_checking,
  changeField,
  handleUpdatePatient,
}) => {
  const { id } = useParams();
  
  //events
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleChecked =(event) => {
    changeField(event.target.checked, event.target.name);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdatePatient(id);
    closeModalUpdate();
  };

  const onFocus = (event) => {
    event.currentTarget.type = "date";
  }

  return (
    <div className="modal-patient-update">
     <img src={close} alt="stylo" className="modal-patient-update-close" onClick={closeModalUpdate}/>
      <p className="formulaire-title">Modifier Patient</p>
      <form className="form" onSubmit={handleSubmit} >
        <input
          className="form-input"
          type="text"
          name="firstname"
          placeholder="Prénom"
          value={firstname}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="lastname"
          placeholder="Nom"
          value={lastname}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="birthdate"
          placeholder="Date de Naissance"
          onFocus={onFocus}
          value={birthdate}
          onChange={handleChange}
        />
        <select className="form-input gender" id="gender" name="gender" value={gender} onChange={handleChange}>
          <option value="M"> Homme</option>
          <option value="F">Femme</option>
        </select>
        <input
          className="form-input"
          type="text"
          name="address"
          placeholder="Adresse"
          value={address}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="zip_code"
          placeholder="Code Postal"
          value={zip_code}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="city"
          placeholder="Ville"
          value={city}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="phone"
          name="phone_number"
          placeholder="Téléphone"
          value={phone_number}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="pathology"
          placeholder="Pathologie"
          value={pathology}
          onChange={handleChange}
        />
        <div className="checkbox-container form-input">
          <label htmlFor="isQuotidien">Patient Quotidien</label>
          <input 
            type="checkbox" 
            id="isQuotidien" 
            name="daily_checking"
            onChange={handleChecked}
            value={daily_checking}
          />
        </div>
        {daily_checking ? <input className="form-input daily-checking" type="number" placeholder="Nombre de visites par jour" name="number_daily_checking" min='0' max='3'/> : null}
        <div className="formulaire-button big" onClick={handleSubmit}>
          <span className="formulaire-button-title">Valider</span>
          <img className="formulaire-button-img" src={check} alt="valider"/>
        </div>
      </form>
    </div>
  )
};

export default UpdatePatientModal;
