import React from 'react';
import {useParams} from 'react-router-dom';

import './updatePatientModal.scss';

import check from 'src/assets/icones/check.svg';

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
  console.log("Container props state patients :",
  id,
  firstname,
  lastname, 
  birthdate, 
  gender, 
  address, 
  zip_code, 
  city, 
  phone_number, 
  pathology, 
  daily_checking,)

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
      <h2 className="modal-patient-update-title">Modifier Patient</h2>
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
        <select id="gender" name="gender" value={gender} onChange={handleChange}>
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
        <input 
          type="checkbox" 
          id="isQuotidien" 
          name="daily_checking"
          onChange={handleChecked}
          value={daily_checking}
        />
        <label htmlFor="isQuotidien">Patient Quotidien</label>
          {daily_checking ? <input type="number" placeholder="Nombre de visite/jour" name="number_daily_checking" min='0' max='3'/> : null}
        <img className="modal-patient-update-img" src={check} alt="valider" onClick={handleSubmit}/>
      </form>
    </div>
  )
};

export default UpdatePatientModal;
