// == Import npm
import React, { Fragment } from 'react';
// == Import
import './patientPage.scss';

// == Import images
import info from 'src/assets/icones/info.svg';
import plus from 'src/assets/icones/plus2.svg';
import circle from 'src/assets/icones/rond.svg';

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
                <span className="patient-add-care-title">Ajouter un soin</span>
              </div>

              <div className="carnet-sante-container">

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      20/01 - 14:00
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Jérôme
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <p className="carnet-sante-entry-right-tag secondary-dark1">
                      Bilan sanguin
                    </p>
                  </div>
                </div>

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      19/01 - 12:00
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Marlène
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <p className="carnet-sante-entry-right-tag primary">
                      Toilette
                    </p>
                  </div>
                </div>

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      18/01 - 06:00
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Stéphane
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <p className="carnet-sante-entry-right-tag secondary-dark1">
                      Pilulier
                    </p>
                  </div>
                </div>

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      17/01 - 08:00
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Céline
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <p className="carnet-sante-entry-right-tag primary">
                      Pansement
                    </p>
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
