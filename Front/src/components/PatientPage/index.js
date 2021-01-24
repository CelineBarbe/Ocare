// == Import npm
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Modal from 'react-modal';
// == Import
import './patientPage.scss';

// == Import images
import info from 'src/assets/icones/info.svg';
import plus from 'src/assets/icones/plus2.svg';
import wave from 'src/assets/icones/wave.svg';
import pill from 'src/assets/icones/pill.svg';
import bandage from 'src/assets/icones/bandage.svg';
import close from 'src/assets/icones/close.svg';

// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';


Modal.setAppElement('#root')

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
  getPatient}) => {
  const { id } = useParams();
  useEffect(() => {getPatient(id)}, [])

  
 /*  const patient = list.find(patient => patient.id == id);
  const patientInfo = () => {
    if(list.length >= 1 ){
      return <>
              <h1 className="patient-title"> {`Mr ${patient.lastname} ${patient.firstname}`} </h1>
              <img onClick={openModalPatient} src={info} alt="information" className="patient-infos" />
            </>
    } else {
      return 'data is loading'
    }
  }
 */
  // Function for modal PATIENT
  const [patientModal,setOpenPatient] = useState(false);
  const [entryModal,setOpenEntry] = useState(false);
  
  function openModalPatient() {
    setOpenPatient(true);
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
      <img onClick={closeModalPatient} src={close} className="modal-patient-close" alt="close"/>
      <h2 className="modal-patient-title primary">Adresse</h2>
      <p className="modal-patient-address"> 23 Rue Valvires, 50700 Valognes</p>
      <p className="modal-patient-phone">0648201293</p>
      <p className="modal-patient-code">Code porte : </p>
      <span className="modal-patient-edit">editer</span>

      <h3 className="modal-patient-title secondary">Pathologies / antécédents</h3>
      <p className="modal-patient-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel purus enim. Donec viverra accumsan laoreet. Nulla sodales ligula in magna luctus, vitae ornare erat vehicula. Nullam dolor libero, suscipit vel facilisis at, tristique vestibulum arcu.</p>
      <p className="modal-patient-pathologie"> Diabétique </p>
      <span className="modal-patient-edit">editer</span>
    </div>
  )

  const modaleEntry = (
    <div className="modal-entry">
      <form className="form">
      <img onClick={closeModalEntry} src={close} className="modal-patient-close" alt="close"/>
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
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
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
      <input
        className="form-input"
        type="text"
        name="siren_code"
        placeholder="Code SIREN"
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
            {/* {patientInfo()}  */}
            {patientModal ? modale : null}

              <p className="patient-title-primary"> Carnet de santé </p>

           {/* PART ADD A TREATMENT */} 
              <div className="patient-add-care">
                <img onClick={openModalEntry} className="patient-add-care-img" src={plus} alt="ajouter"/>
                <span onClick={openModalEntry} className="patient-add-care-title">Ajouter une entrée</span>
              </div>

            
            {/* ENTRY CONTAINER OF THE PAGE */} 
              <div className="carnet-sante-container">
                {entryModal ? modaleEntry : null}
              {/* NEW ENTRY PART OF THE PAGE */}
                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-top">
                    <div className="carnet-sante-entry-top-icone">
                      <img src={pill} className="carnet-sante-entry-top-icone-img" alt="icone"/>
                    </div>
                    <div className="carnet-sante-entry-top-care">
                      <div className="carnet-sante-entry-top-care-top">
                        <h3 className="carnet-sante-entry-top-care-top-title">Pilulier</h3>
                        <span className="carnet-sante-entry-top-care-top-name">Jérôme</span>
                      </div>
                      <div className="carnet-sante-entry-top-care-bottom">
                        <span className="carnet-sante-entry-top-care-bottom-date">22 Jan 2021</span>
                      </div> 
                    </div>
                  </div>
                  <div className="carnet-sante-entry-bottom">
                    <div className="carnet-sante-entry-bottom-left">
                      <div className="carnet-sante-entry-bottom-left-border"></div>
                    </div>
                    <div className="carnet-sante-entry-bottom-right">
                      <span className="carnet-sante-entry-bottom-right-observation">
                        Attention pansement qui coule, à vérifier tous les jours, on va essayer de mettre plein de texte pour voir comment réagit le container. Il faut encore mettre pas mal de texte pour que tout dépasse, il en faut encore encore et encore, c'est long j'aurai mieux faire de prendre un lorem ipsum automatiquement.
                      </span>
                    </div>
                  </div>
                </div>  

              {/* NEW ENTRY PART OF THE PAGE WITHOUT OBSERVATION SPAN */}
                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-top">
                    <div className="carnet-sante-entry-top-icone">
                      <img src={wave} className="carnet-sante-entry-top-icone-img" alt="icone"/>
                    </div>
                    <div className="carnet-sante-entry-top-care">
                      <div className="carnet-sante-entry-top-care-top">
                        <h3 className="carnet-sante-entry-top-care-top-title">Constante</h3>
                        <span className="carnet-sante-entry-top-care-top-name">Marlène</span>
                      </div>
                      <div className="carnet-sante-entry-top-care-bottom">
                        <span className="carnet-sante-entry-top-care-bottom-date">21 Jan 2021</span>
                      </div> 
                    </div>
                  </div>
                  <div className="carnet-sante-entry-bottom">
                    <div className="carnet-sante-entry-bottom-left">
                      <div className="carnet-sante-entry-bottom-left-border"></div>
                    </div>
                    <div className="carnet-sante-entry-bottom-right">
                      {/* NO OBSERVATION PAGE IN BOTTOM-RIGHT FOR TEST*/}
                    </div>
                  </div>
                </div>  

                {/* NEW ENTRY PART OF THE PAGE WITH SMALL OBSERVATION SPAN */}
                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-top">
                    <div className="carnet-sante-entry-top-icone">
                      <img src={bandage} className="carnet-sante-entry-top-icone-img" alt="icone"/>
                    </div>
                    <div className="carnet-sante-entry-top-care">
                      <div className="carnet-sante-entry-top-care-top">
                        <h3 className="carnet-sante-entry-top-care-top-title">Pansement</h3>
                        <span className="carnet-sante-entry-top-care-top-name">Stéphane</span>
                      </div>
                      <div className="carnet-sante-entry-top-care-bottom">
                        <span className="carnet-sante-entry-top-care-bottom-date">20 Jan 2021</span>
                      </div> 
                    </div>
                  </div>
                  <div className="carnet-sante-entry-bottom">
                    <div className="carnet-sante-entry-bottom-left">
                      <div className="carnet-sante-entry-bottom-left-border"></div>
                    </div>
                    <div className="carnet-sante-entry-bottom-right">
                      <span className="carnet-sante-entry-bottom-right-observation">
                          Attention pansement qui coule, à vérifier tous les jours.
                      </span>
                    </div>
                  </div>
                </div>  


              </div>
            </div>
          </div>
        <Nav />
      </div>
    
  )
};

// == Export
export default PatientPage;
