import React, { useEffect, useState } from 'react';
// == Import
import './SubCabinetModal.scss';

import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';


const SubCabinetModal = ({ closeModalUpdate }) => {

  return (
    <div className="modal-sub-cabinet">
      <img src={close} alt="stylo" className="modal-sub-cabinet-close" onClick={closeModalUpdate}/>
      <p className="modal-sub-cabinet-title">
       Rejoindre un cabinet 
      </p>
      <form className="form">
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Nom du cabinet"
      />
      <input
        className="form-input"
        type="password"
        name="pin_code"
        placeholder="Code pin"
      />
      <img className="modal-patient-update-img" src={check} alt="valider"/>
    </form>
    </div>
  )
};

export default SubCabinetModal;
