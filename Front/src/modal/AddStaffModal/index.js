import React from 'react';

// == Import
import './addStaffModal.scss';

import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';


const AddStaffModal = ({ 
  closeModalAddStaff
}) => {

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateProfil(id);
    closeModalEditProfil();
  };

  return (
    <div className="modal-sub-cabinet">
      <img src={close} alt="stylo" className="modal-sub-cabinet-close" onClick={closeModalAddStaff}/>
      <p className="modal-sub-cabinet-title">
       Ajouter un infirmier
      </p>
      <form className="form">
      <input
        className="form-input"
        type="text"
        name="lastname"
        placeholder="Nom"
    
      />
      <input
        className="form-input"
        type="text"
        name="firstname"
        placeholder="Prénom"
      />
      
      <img className="modal-patient-update-img" src={check} alt="valider"/>
    </form>
    </div>
  )
};

export default AddStaffModal;
