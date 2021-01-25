import React, { Fragment } from 'react';

// == Import
import './updatecabinet.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';

const UpdateCabinetModal = ({
 /*  closeModalEntry,
  changeField,
  handleSubmit */
}) => {

/* const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  }

  const handleChecked = (event) => {
    changeField(event.target.checked, event.target.name);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    closeModalEntry();
  };
  */
  

  return (
    <div className="modal-entry">
    <form className="form" >
    <img  className="modal-patient-close" alt="close" src={close}/>
      <input
        className="form-input"
        type="text"
        name="newEntryName"
        placeholder="Nom"
        
      />
      <input
        className="form-input"
        type="text"
        name="newEntryAddress"
        placeholder="Adresse"
        
      />
      <input
      className="form-input"
      type="text"
      name="newEntryZip_code"
      placeholder="Code Postal"
      
    />
      <input
        className="form-input"
        type="text"
        name="newEntryCity"
        placeholder="Ville"
        
      />
      <input
        className="form-input"
        type="password"
        name="newEntryPin_code"
        placeholder="Code Pin du cabinet"
        
      />
      <input
        className="form-input"
        type="phone"
        name="newEntryPhone_number"
        placeholder="Téléphone"
        
      />
      
      <button type="button" className="form-button">
        Update le cabinet !
      </button>
    </form>
  </div>
  )
};

export default UpdateCabinetModal;
