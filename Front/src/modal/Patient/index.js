import React, { useEffect, useState } from 'react';
// == Import
import './patientModal.scss';

const PatientModal = ({
  gender, 
  birthdate, 
  address, 
  zip_code, 
  city, 
  phone_number, 
  pathology, 
  daily_checking, 
  number_dailychecking
}) => {
  return (
    <div className="modal-patient">
    <h3 className="modal-patient-title secondary">Etat Civil</h3> 
    <p className="modal-patient-address"> {gender} de {birthdate} ans. </p>

    <h2 className="modal-patient-title primary">Adresse</h2>
    <p className="modal-patient-address"> {address}, {zip_code} {city}</p>
    <p className="modal-patient-phone">{phone_number}</p>
    <span className="modal-patient-edit">editer</span>

    <h3 className="modal-patient-title secondary">Pathologies / antécédents</h3>
    <p className="modal-patient-pathologie"> {pathology} </p>
    <p className="modal-patient-content">{daily_checking? number_dailychecking>1 ? `Patient Quotidien : ${number_dailychecking} visites par jour.`: "Patient quotidien" : null}</p>

    <span className="modal-patient-edit">editer</span>
  </div>
  )
};

export default PatientModal;
