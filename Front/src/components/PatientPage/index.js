// == Import npm
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

// == Import
import './patientPage.scss';

// == Import images
import info from 'src/assets/icones/info.svg';
import plus from 'src/assets/icones/plus2.svg';
import wave from 'src/assets/icones/wave.svg';
import pill from 'src/assets/icones/pill.svg';
import bandage from 'src/assets/icones/bandage.svg';


// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import LogBook from 'src/components/LogBook';

// == Composant
const PatientPage = ({
  firstname,
  lastname, 
  birthdate, 
  gender, 
  address, 
  zip_code, 
  city,
  phone_number,
  pathology,
  daily_checking,
  number_dailychecking,
  getPatient,
  isLoading,
  }) => {

  const { id } = useParams();
  useEffect(() => {getPatient(id)}, [])


  const age = () => {
    if(!isLoading) {
      //TODO LUXON et calcul d'age 
      return 23;
    }
  }
  
  const patientInfo = () => {
    if(!isLoading){
      return <>
              <h1 className="patient-title"> {`Mr ${lastname} ${firstname}`} </h1>
              <img onClick={openModalPatient} src={info} alt="information" className="patient-infos" />
            </>
    } else {
      return 'data is loading'
    }
  }
 


  // Function for modal PATIENT
  const [patientModal,setOpenPatient] = useState(false);
  const [entryModal,setOpenEntry] = useState(false);
  
  function openModalPatient() {
    if (patientModal) {
      setOpenPatient(false);
    } else {
      setOpenPatient(true);
    }
  }

  function openModalEntry() {
    setOpenEntry(true);
  }
 
  function closeModalPatient(){
    setOpenPatient(false);
  }
  function closeModalEntry(){
    setOpenEntry(false);
  }
 
  const modale = (
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

  const modaleEntry = (
    <div className="modal-entry">
      <form className="form">
      <img onClick={closeModalEntry} src={close} className="modal-patient-close" alt="close"/>
      <input
        className="form-input"
        type="date"
        name="planned_date"
        placeholder="Date Prévue"
       
      />
      <input
        className="form-input"
        type="date"
        name="ending_date"
        placeholder="Date de fin"
        
      />
      <input
        className="form-input"
        type="text"
        name="Observations"
        placeholder="Observations"
        
      />
      <input
        className="form-input"
        type="password"
        name="password"
        placeholder="Password"
      />
      <input
        className="form-input"
        type="phone"
        name="phone_number"
        placeholder="Téléphone"
      />
      <button type="button" className="form-button">
        Ajouter
      </button>
    </form>
    </div>
  )
  
  return (
    
      <div className="patient-page">
        <Header />
          <div className="main">
          {/* LOCAL CONTAINER DISPLAY FLEX COLUMN AND OVERFLOW-Y SCROLL */} 
            <div className="patient">
            { patientInfo()  }
            {patientModal ? modale : null}

              <p className="patient-title-primary"> Carnet de santé </p>

           {/* PART ADD A TREATMENT */} 
              <div className="patient-add-care">
                <img onClick={openModalEntry} className="patient-add-care-img" src={plus} alt="ajouter"/>
                <span onClick={openModalEntry} className="patient-add-care-title">Ajouter une entrée</span>
              </div>
              <LogBook />
            </div>
          </div>
        <Nav />
      </div>
    
  )
};

// == Export
export default PatientPage;
