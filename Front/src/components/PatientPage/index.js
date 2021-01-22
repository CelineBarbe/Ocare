// == Import npm
import React, { Fragment } from 'react';
// == Import
import './patientPage.scss';

// == Import images
import info from 'src/assets/icones/info.svg';
import plus from 'src/assets/icones/plus2.svg';
import circle from 'src/assets/icones/rond.svg';
import pen from 'src/assets/icones/pen.svg';

// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';


// == Composant
const PatientPage = () => {
  return (
    
      <div className="patient-page">
        <Header />
          <div className="main">
            <div className="patient">
              <h1 className="patient-title"> Mr Pichon Thomas </h1>
              <img src={info} alt="information" className="patient-infos" />

              <p className="patient-title-primary"> Carnet de santé </p>

              <div className="patient-add-care">
                <img className="patient-add-care-img" src={plus} alt="ajouter"/>
                <span className="patient-add-care-title">Ajouter une entrée</span>
              </div>

              <div className="carnet-sante-container">

                
                
              </div>
            </div>
          </div>
        <Nav />
      </div>
    
  )
};

// == Export
export default PatientPage;
