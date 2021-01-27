import React, { useEffect, Fragment } from 'react';

// == Import
import './addPatientModal.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';

const AddPatientModal = ({
  closeModalAddPatient
}) => {



  return (
    <div className="modal-entry">
    <form className="form">
    <img  className="modal-patient-close" alt="close" src={close} onClick={closeModalAddPatient}/>
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="nom"
      />
      <img className="modal-patient-update-img" src={check} alt="valider"/>
    </form>
  </div>
  )
};

export default AddPatientModal;
