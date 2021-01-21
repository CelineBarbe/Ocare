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

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      20/01
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Jérôme
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <div className="carnet-sante-entry-right-title secondary-dark1">
                      <h3 >Bilan sanguin</h3>
                    </div>

                    <div className="carnet-sante-entry-right-observation">
                      <span className="carnet-sante-entry-right-observation-ellipsis"></span>
                    </div>
                  </div>
                </div>

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      19/01
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Marlène
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>


                  <div className="carnet-sante-entry-right">
                    <div className="carnet-sante-entry-right-title primary">
                      <h3 >Toilette</h3>
                    </div>

                    <div className="carnet-sante-entry-right-observation">
                      <span className="carnet-sante-entry-right-observation-ellipsis">Pansement qui coule à surveiller Pansement qui coule à surveiller Pansement qui coule à surveiller</span>
                    </div>
                  </div>

                </div>

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      18/01
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Stéphane
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <div className="carnet-sante-entry-right-title secondary-dark1">
                      <h3 >Injection</h3>
                    </div>

                    <div className="carnet-sante-entry-right-observation">
                      <span className="carnet-sante-entry-right-observation-ellipsis">Difficile à piquer</span>
                    </div>
                  </div>
                </div>

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      17/01
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Céline
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <div className="carnet-sante-entry-right-title primary">
                      <h3 >Pansement</h3>
                    </div>

                    <div className="carnet-sante-entry-right-observation">
                      <span className="carnet-sante-entry-right-observation-ellipsis"></span>
                    </div>
                  </div>
                </div>

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      17/01
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Lindsay
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <div className="carnet-sante-entry-right-title secondary-dark1">
                      <h3 >Transmission</h3>
                    </div>

                    <div className="carnet-sante-entry-right-observation">
                      <span className="carnet-sante-entry-right-observation-ellipsis">Retirer les points</span>
                    </div>
                  </div>
                </div>

                <div className="carnet-sante-entry">
                  <div className="carnet-sante-entry-left">
                    <span className="carnet-sante-entry-left-date">
                      16/01
                    </span>
                    <span className="carnet-sante-entry-left-name">
                      Nico
                    </span>
                  </div>
                  <div className="carnet-sante-entry-middle">
                    <img src={circle} alt="circle" className="carnet-sante-entry-middle-img"/>
                  </div>
                  <div className="carnet-sante-entry-right">
                    <div className="carnet-sante-entry-right-title primary">
                      <h3 >Toilette</h3>
                    </div>

                    <div className="carnet-sante-entry-right-observation">
                      <span className="carnet-sante-entry-right-observation-ellipsis"></span>
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
