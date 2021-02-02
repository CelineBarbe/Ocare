// == Import npm
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// == Import
import './cabinetsPage.scss';

//== Import components

import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import CreateCabinetModal from 'src/containers/CreateCabinetModal';

// == Import images
import hospital from 'src/assets/images/hospital.png';
import plus from 'src/assets/icones/plus2.svg';
import moins from 'src/assets/icones/moinsvert.svg';


// == Composant
const CabinetsPage = ({ listCabinets, handleunSubCabinet, handleRefresh}) => {

/* useEffect(() => {
  console.log("refresh listCabinets dans cabinetsPage et envoi dashboard init")
  handleRefresh()
}, [listCabinets]) */

const getCabinetId = (params) => {
  handleunSubCabinet(params);
  //refresh dashboard init sans redirect pour test à voir
  //handleRefresh();
} 

/*hook pour modal */
const [createCabinet,setCreateCabinet] = useState(false);
/* Fonction d'ouverture fermeture editProfil */
function openModalCreateCabinet() {
  setCreateCabinet(true);
}

function closeModalCreateCabinet(){
  setCreateCabinet(false);
}

  return (

        <Fragment>
        <Header />
        <div className="main">
        <div className="cabinets">
        <h1 className="cabinets-title"> Gestion des cabinets </h1>
        <img src={plus} alt="croix" className="cabinets-add" onClick={openModalCreateCabinet} />
        
          <div className="cabinets-container">
          {
            createCabinet 
            ? <CreateCabinetModal closeModalCreateCabinet={closeModalCreateCabinet} />
            : null
          }
          
          {listCabinets.map(cabinet => (
                <div className="cabinets-card" key={cabinet.id} id={cabinet.id}>
                  <img src={hospital} alt="cabinet" className="cabinets-card-img" />
                  <p className="cabinets-card-infos cabinets-card-name">{cabinet.name}</p>
                  <span className="cabinets-card-infos cabinets-card-nbpatient">{cabinet.nbpatients} patients</span>

                  <img src={moins} alt="moins" className="cabinets-card-add" onClick={ event => getCabinetId(cabinet.id)} />
                </div>
          ))}
          </div>
          </div>
        </div>
        <Nav />
        </Fragment>
  )
};

// == Export
export default CabinetsPage;
