// == Import npm
import React, { Fragment } from 'react';
// == Import
import './patientsPage.scss';

// == Import images
import plus from 'src/assets/icones/plus2.svg';

// == Import 
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Searchbar from 'src/components/Searchbar';
import AlphabeticalSearchbar from 'src/components/AlphabeticalSearchbar';

// == Composant
const PatientsPage = () => {
  return (
    
      <div className="patients-page">
        <Header />
          <div className="main">
            <Searchbar />
            <div className="patients-page-create">
              <img className="patients-page-create-img" src={plus} alt="ajouter"/>
              <span className="patients-page-create-title">Ajouter un patient</span>
            </div>

            <div className="patients-page-liste-container">

              <div className="patients-page-liste">
                <p className="patients-page-liste-title secondary-dark1">A</p>
                <ul className="patients-page-liste-ul">
                  <li className="patients-page-liste-li">Armand</li>
                  <li className="patients-page-liste-li">Arnaud</li>
                </ul>
              </div>

              <div className="patients-page-liste">
                <p className="patients-page-liste-title primary">B</p>
                <ul className="patients-page-liste-ul">
                  <li className="patients-page-liste-li">Baillet</li>
                  <li className="patients-page-liste-li">Baral</li>
                  <li className="patients-page-liste-li">Boulanger</li>
                  <li className="patients-page-liste-li">Brive</li>
                </ul>
              </div>

              <div className="patients-page-liste">
                <p className="patients-page-liste-title secondary-dark1">C</p>
                <ul className="patients-page-liste-ul">
                  <li className="patients-page-liste-li">Clark</li>
                  <li className="patients-page-liste-li">Constant</li>
                </ul>
              </div>

            </div>

            <AlphabeticalSearchbar />
          </div>
        <Nav />
      </div>
    
  )
};

// == Export
export default PatientsPage;
