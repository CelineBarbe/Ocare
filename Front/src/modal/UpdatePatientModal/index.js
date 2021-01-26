import React from 'react';

import './updatePatientModal.scss';

import check from 'src/assets/icones/check.svg';

const UpdatePatientModal = () => {

  //events
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleChecked =(event) => {
    changeField(event.target.checked, event.target.name);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitPatient();
  };

  return (
    <div className="modal-patient-update">
      <h2 className="modal-patient-update-title">Modifier Patient</h2>
      <form className="form" >
        <input
          className="form-input"
          type="text"
          name="firstname"
          placeholder="Prénom"
        />
        <input
          className="form-input"
          type="text"
          name="lastname"
          placeholder="Nom"
        />
        <input
          className="form-input"
          type="date"
          name="birthdate"
          placeholder="Date de Naissance"
        />
        <select id="gender" name="gender">
          <option value="M"> Homme</option>
          <option value="F">Femme</option>
        </select>
        <input
          className="form-input"
          type="text"
          name="address"
          placeholder="Adresse"
        />
        <input
        className="form-input"
        type="text"
        name="zip_code"
        placeholder="Code Postal"
      />
        <input
          className="form-input"
          type="text"
          name="city"
          placeholder="Ville"
        />
        <input
          className="form-input"
          type="phone"
          name="phone_number"
          placeholder="Téléphone"
        />
        <input
          className="form-input"
          type="text"
          name="pathology"
          placeholder="Pathologie"
        />
        <input type="checkbox" id="isQuotidien" name="daily_checking"/>
        <label htmlFor="isQuotidien">Patient Quotidien</label>
        
        <img className="modal-patient-update-img" src={check} alt="valider"/>
      </form>
    </div>
  )
};

export default UpdatePatientModal;
