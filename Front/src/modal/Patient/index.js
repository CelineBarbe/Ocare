import React, { useEffect, useState } from 'react';

import { DateTime } from "luxon";
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

  /* Create today date with the DATE object */
  const date = new Date(Date.now());
  /* we transform the date into a year */
  const dateFullYear = date.getFullYear();
  console.log("year date",dateFullYear);
  /* luxon is used to transform the patient's date into a year */
  const birthdateYear = DateTime.fromISO(birthdate).year;
  /* we subtract the current year with the year of birth */
  const age = dateFullYear - birthdateYear;
  console.log("age;", age);



  return (
    <div className="modal-patient">
    <h3 className="modal-patient-title secondary">Etat Civil</h3> 
    <p className="modal-patient-address"> {gender} de {age} ans. </p>

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
