// == Import npm
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// == Import
import './patientsPage.scss';

// == Import images
import plus from 'src/assets/icones/plus2.svg';

// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import Searchbar from 'src/containers/Searchbar';
import AlphabeticalSearchbar from 'src/components/AlphabeticalSearchbar';
import CreatePatientModal from 'src/containers/CreatePatientModal';

//UTILS
import { alphabetic,returnArrayFirstLetterSorted } from 'src/utils/searchAndReturn';
// == Composant
const PatientsPage = ({getPatients, list}) => {
  useEffect(() => {
    getPatients();
}, [])

/*composant défaut lorsqu'il n'y a pas de patients à afficher */
const DefaultComponant = () => {
  return (
    <h1 className="default-title">Aucun patient, cliquer sur ajouter patient</h1>
  )
}


const data = (alphabetic.map(letter => (
                <div className="patients-page-liste" id={letter} key={letter}>
                            <p className="patients-page-liste-title" id={`title${letter}`}>{letter}</p>
                            <ul className="patients-page-liste-ul">
                              {returnArrayFirstLetterSorted(list,letter).map(patient =>(
                                <li className="patients-page-liste-li" id={patient.id} key={patient.id}><Link to={`/patient/${patient.id}`}>{patient.lastname} {patient.firstname}</Link></li>
                              ))}
                            </ul>
                 </div>
  ))
)

/*hook pour modal */
const [createPatient,setCreatePatient] = useState(false);
/* Fonction d'ouverture fermeture editProfil */
function openModalCreatePatient() {
  setCreatePatient(true);
}

function closeModalCreatePatient(){
  setCreatePatient(false);
}


  return (
    
      <div className="patients-page">
        <Header />
          <div className="main">
            <Searchbar />
            <div className="patients-page-create">
              <img className="patients-page-create-img" src={plus} alt="ajouter" onClick={openModalCreatePatient}/>
              <span className="patients-page-create-title" onClick={openModalCreatePatient}>Ajouter un patient</span>
            </div>

            <div className="patients-page-liste-container">
              { 
              createPatient
              ? <CreatePatientModal closeModalCreatePatient={closeModalCreatePatient} /> 
              : null
              }
        
             {
              list.length >= 1 
              ? data 
              : <DefaultComponant/> 
             } 
            </div>
            <AlphabeticalSearchbar />
          </div>
        <Nav />
      </div>
    
  )
};

// == Export
export default PatientsPage;
