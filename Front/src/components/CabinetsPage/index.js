// == Import npm
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

// == Import
import './cabinetsPage.scss';

//== Import components

import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';

// == Import images
import hospital from 'src/assets/images/hospital.png';
import plus from 'src/assets/icones/plus2.svg';
import moins from 'src/assets/icones/moinsvert.svg';


// == Composant
const CabinetsPage = ({ listCabinets, handleunSubCabinet }) => {

const getCabinetId = (params) => {
  handleunSubCabinet(params);
} 

  return (

        <Fragment>
        <Header />
        <div className="main cabinets">
        <h1 className="cabinets-title"> Gestion des cabinets </h1>
          <Link to="/addcabinet"><img src={plus} alt="croix" className="cabinets-add" /></Link>
        
          <div className="cabinets-container">
          {listCabinets.map(cabinet => (
                <div className="cabinets-card" key={cabinet.id}>
                  <img src={hospital} alt="cabinet" className="cabinets-card-img" />
                  <p className="cabinets-card-infos cabinets-card-name">{cabinet.name}</p>
                  <span className="cabinets-card-infos cabinets-card-nbpatient">{cabinet.nbpatients} patients</span>

                  <img src={moins} alt="moins" className="cabinets-card-add" onClick={ event => getCabinetId(cabinet.id)} />
                </div>
          ))}
          </div>
        </div>
        <Nav />
        </Fragment>
  )
};

// == Export
export default CabinetsPage;
