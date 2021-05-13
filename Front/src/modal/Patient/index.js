import React, { useEffect, useState } from 'react';

import { DateTime } from "luxon";
// == Import
import './patientModal.scss';

import nbPatients from 'src/assets/icones/patients_rose.svg';
import adresse from 'src/assets/icones/map.svg';
import phone from 'src/assets/icones/phone.svg';
import patho from 'src/assets/icones/patho.svg';

//== Import Component
import UpdatePatientModal from 'src/containers/UpdatePatientModal';

const PatientModal = ({
  gender, 
  birthdate, 
  address, 
  zip_code, 
  city, 
  phone_number, 
  pathology, 
  daily_checking, 
  number_dailychecking,
  lastname,
  firstname,
}) => {

  /* Hook gestion modal */
  const [updatePatientModal,setOpenUpdatePatientModal] = useState(false);
  /* Fonction d'ouverture fermeture updatemodal */
  function openModalUpdate() {
    setOpenUpdatePatientModal(true);
  }

  function closeModalUpdate(){
    setOpenUpdatePatientModal(false);
  }

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
    <p className="modal-patient-content">{daily_checking? number_dailychecking>1 ? `Patient Quotidien : ${number_dailychecking} visites par jour.`: "Patient quotidien" : null}</p>
    <div className="container-cabinet-infos">
        <img src={nbPatients} alt="homme" className="container-cabinet-infos-img"/>
        <p className="container-cabinet-infos-title">{gender} - {age} ans</p>
    </div>
    <div className="container-cabinet-infos">
        <img src={adresse}  alt="homme" className="container-cabinet-infos-img"/>
        <p className="container-cabinet-infos-title">{`${address} \n ${zip_code} ${city}`}</p>
    </div>
    <div className="container-cabinet-infos">
        <img src={phone}  alt="homme" className="container-cabinet-infos-img"/>
        <p className="container-cabinet-infos-title">{phone_number}</p>
    </div>
    {pathology 
    ? <div className="container-cabinet-infos">
      <img src={patho}  alt="homme" className="container-cabinet-infos-img"/>
      <p className="container-cabinet-infos-title">{pathology}</p>
    </div>
    : null
    }

    <span onClick={openModalUpdate} className="modal-patient-edit">editer</span>
      {updatePatientModal 
      ? 
        <UpdatePatientModal 
          closeModalUpdate={closeModalUpdate}
        /> 
      : null
      }
  </div>
  )
};

export default PatientModal;
