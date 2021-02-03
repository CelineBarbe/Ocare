// == Import npm
import React, { useEffect, useState, useRef } from 'react';
import {useParams} from 'react-router-dom';

// == Import
import './patientPage.scss';

// == Import images
import info from 'src/assets/icones/info.svg';
import plus from 'src/assets/icones/plus2.svg';

// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import LogBook from 'src/containers/LogBook';
import PatientModal from 'src/modal/Patient';

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

 
  const patientInfo = () => {
    if(!isLoading){
      return <>
              <h1 className="patient-title"> {`${lastname} ${firstname}`} </h1>
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

  function closeModalEntry(){
    setOpenEntry(false);
  }
  
  return (
    
      <>
        <Header />
          <div className="main">
          {/* LOCAL CONTAINER DISPLAY FLEX COLUMN AND OVERFLOW-Y SCROLL */} 
            <div className="patient">
            { patientInfo()  }
            {patientModal 
            ? 
            <PatientModal 
              gender={gender}
              birthdate={birthdate}
              address={address}
              zip_code={zip_code}
              city={city}
              phone_number={phone_number}
              pathology={pathology}
              daily_checking={daily_checking}
              number_dailychecking={number_dailychecking}
              firstname={firstname}
              lastname={lastname}
             /> 
            : null
            }

              <p className="patient-title-primary"> Carnet de santé </p>

           {/* PART ADD A TREATMENT */} 
              <div className="patient-add-care">
                <img onClick={openModalEntry} className="patient-add-care-img" src={plus} alt="ajouter"/>
                <span onClick={openModalEntry} className="patient-add-care-title">Ajouter une entrée</span>
              </div>
              <LogBook 
                entryModal={entryModal} 
                closeModalEntry={closeModalEntry} 
                patientId={id}
              />
            </div>
          </div>
        <Nav />
      </>
  )
};

// == Export
export default PatientPage;
