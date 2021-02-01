import React from 'react';

// == Import
import './addStaffModal.scss';

import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';


const AddStaffModal = ({ 
  closeModalAddStaff,
  newEntryMail,
  newEntryPin_code,
  changeField,
  subNurseCabinet
}) => {

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    subNurseCabinet()
    closeModalAddStaff();
  };

  return (
    <div className="modal-sub-cabinet">
      <img src={close} alt="stylo" className="modal-sub-cabinet-close" onClick={closeModalAddStaff}/>
      <p className="modal-sub-cabinet-title">
       Ajouter un infirmier
      </p>
      <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="mail"
        name="newEntryMail"
        placeholder="Email de l'infirmier"
        value={newEntryMail}
        onChange={handleChange}
    
      />
      <input
        className="form-input"
        type="password"
        name="newEntryPin_code"
        value={newEntryPin_code}
        placeholder="Code Pin du cabinet"
        onChange={handleChange}
      />
      
      <img className="modal-patient-update-img" src={check} alt="valider" onClick={handleSubmit}/>
    </form>
    </div>
  )
};

export default AddStaffModal;
