import React, { Fragment } from 'react';

// == Import
import './updatecabinet.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';

const UpdateCabinetModal = ({
  id,
  name,
  address,
  zip_code,
  city,
  phone_number,
  email,
  handleModal,
  changeFieldUpdate,
  handleSubmitUpdate 
}) => {

const handleChange = (event) => {
  changeFieldUpdate(event.target.value, event.target.name);
  }

const handleChecked = (event) => {
    changefield(event.target.checked, event.target.name);
  }

const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitUpdate();
    handleModal();
  };

const closeModal = () => {
  handleModal();
}

  

  return (
    <div className="modal-entry">
    <form className="form" onSubmit={handleSubmit}>
    <img  className="modal-patient-close" alt="close" src={close} onClick={closeModal}/>
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Nom"
        value={name}
        onChange={handleChange}
      />
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
        type="email"
        name="email"
        placeholder="email de contact"
        value={email}
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
      
      <button type="button" className="form-button" onClick={handleSubmit}>
        Update le cabinet !
      </button>
    </form>
  </div>
  )
};

export default UpdateCabinetModal;
