import React, { useEffect, Fragment } from 'react';

// == Import
import './updatecabinet.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/checkWhite.svg';

const UpdateCabinetModal = ({
  id,
  name,
  address,
  zip_code,
  city,
  phone_number,
  newEntryMail,
  pin_code,
  handleModal,
  changeFieldUpdate,
  handleSubmitUpdate,
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
/* useEffect(() => {
  console.log('coucou de useeffect');
  newEntryName  = name;
newEntryAddress = address;
newEntryZip_code = zip_code;
newEntryCity = city;
newEntryPhone_number = phone_number;
newEntryPin_code = pin_code;
}, []) */


  return (
    <div className="modal-edit-cabinet">
    <form className="form" onSubmit={handleSubmit}>
    <img  className="modal-edit-cabinet-close" alt="close" src={close} onClick={closeModal}/>
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="nom"
        value={name}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="address"
        placeholder='address'
        value={address}
        onChange={handleChange}
      />
      <input
      className="form-input"
      type="text"
      name="zip_code"
      placeholder="zip_code"
      value={zip_code}
      onChange={handleChange}
      
    />
      <input
        className="form-input"
        type="text"
        name="city"
        placeholder="city"
        value={city}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="password"
        name="pin_code"
        placeholder="pin_code"
        value={pin_code}
        onChange={handleChange}
      />
      {/* <input
        className="form-input"
        type="email"
        name="email"
        placeholder="email de contact"
        value={newEntryMail}
        onChange={handleChange}
      /> */}
      <input
        className="form-input"
        type="phone"
        name="phone_number"
        placeholder="phone_number"
        value={phone_number}
        onChange={handleChange}
      />
      
      <div className="formulaire-button" onClick={handleSubmit}>
        <span className="formulaire-button-title">Valider</span>
        <img className="formulaire-button-img" src={check} alt="valider"/>
      </div>
    </form>
  </div>
  )
};

export default UpdateCabinetModal;
