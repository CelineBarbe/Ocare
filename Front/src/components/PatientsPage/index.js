// == Import npm
import React, { Fragment } from 'react';

// == Import
import './patientsPage.scss';

//== Import components
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Searchbar from 'src/components/Searchbar';

// == Import images
import plus from 'src/assets/icones/plus2.svg';



// == Composant
const PatientsPage = () => {
  return (
    <Fragment>
      <Header />
      <div className="main">
        <Searchbar />
        <div className="patients-page-create">
          <img className="patients-page-create-img" src={plus} alt="ajouter"/>
          <span className="patients-page-create-title">Ajouter un patient</span>
        </div>

        <div className="patients-page-liste">
          <p className="patients-page-liste-title1">A</p>
          <ul className="patients-page-liste-ul">
            <li className="patients-page-liste-li">Armand</li>
            <li className="patients-page-liste-li">Arnaud</li>
          </ul>
        </div>

        <div className="patients-page-liste">
          <p className="patients-page-liste-title2">B</p>
          <ul className="patients-page-liste-ul">
            <li className="patients-page-liste-li"></li>
          </ul>
        </div>
        
        <div className="patients-page-liste">
          <p className="patients-page-liste-title1">C</p>
          <ul className="patients-page-liste-ul">
            <li className="patients-page-liste-li"></li>
          </ul>
        </div>

        <div className="patients-page-liste">
          <p className="patients-page-liste-title2">D</p>
          <ul className="patients-page-liste-ul">
            <li className="patients-page-liste-li"></li>
          </ul>
        </div>

        <div className="patients-page-liste">
          <p className="patients-page-liste-title1">E</p>
          <ul className="patients-page-liste-ul">
            <li className="patients-page-liste-li"></li>
          </ul>
        </div>

        <div className="patients-page-liste">
          <p className="patients-page-liste-title2">F</p>
          <ul className="patients-page-liste-ul">
            <li className="patients-page-liste-li"></li>
          </ul>
        </div>
      </div>
      <div className="patients-page-search">
          <ul className="patients-page-search-ul">
            <li className="patients-page-search-li">A</li>
            <li className="patients-page-search-li">B</li>
            <li className="patients-page-search-li">C</li>
            <li className="patients-page-search-li">D</li>
            <li className="patients-page-search-li">E</li>
            <li className="patients-page-search-li">F</li>
            <li className="patients-page-search-li">G</li>
            <li className="patients-page-search-li">H</li>
            <li className="patients-page-search-li">I</li>
            <li className="patients-page-search-li">J</li>
            <li className="patients-page-search-li">K</li>
            <li className="patients-page-search-li">L</li>
            <li className="patients-page-search-li">M</li>
            <li className="patients-page-search-li">N</li>
            <li className="patients-page-search-li">O</li>
            <li className="patients-page-search-li">P</li>
            <li className="patients-page-search-li">Q</li>
            <li className="patients-page-search-li">R</li>
            <li className="patients-page-search-li">S</li>
            <li className="patients-page-search-li">T</li>
            <li className="patients-page-search-li">U</li>
            <li className="patients-page-search-li">V</li>
            <li className="patients-page-search-li">W</li>
            <li className="patients-page-search-li">X</li>
            <li className="patients-page-search-li">Y</li>
            <li className="patients-page-search-li">Z</li>
          </ul>
        </div>
      <Nav />
    </Fragment>
  )
};

// == Export
export default PatientsPage;
