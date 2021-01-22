// == Import npm
import React, { Fragment, useEffect } from 'react';
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

//UTILS
import { alphabetic,returnArrayFirstLetterSorted } from 'src/utils/searchAndReturn';
// == Composant
const PatientsPage = ({getPatients, list}) => {
  useEffect(() => {
    getPatients();
}, [])

useEffect(() => {
  if(list.length >= 1) {
    console.log("sortie de ",returnArrayFirstLetterSorted(list,"B"))
  }
}, [list]);

const data = (alphabetic.map(letter => (
                <div className="patients-page-liste" id={letter}>
                            <p className="patients-page-liste-title secondary-dark1" id={letter}>{letter}</p>
                            <ul className="patients-page-liste-ul">
                              {returnArrayFirstLetterSorted(list,letter).map(patient =>(
                                <li className="patients-page-liste-li" id={patient.id}>{patient.lastname}</li>
                              ))}
                            </ul>
                 </div>
  ))
)

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
             {list.length >= 1 ? data : <p>data is loading</p>} 

             
              {/* <div className="patients-page-liste">
                <p className="patients-page-liste-title secondary-dark1" id="A">A</p>
                <ul className="patients-page-liste-ul">
                  <Link to="/patient"><li className="patients-page-liste-li">Armand</li></Link>
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
                <p className="patients-page-liste-title secondary-dark1" id="C">C</p>
                <ul className="patients-page-liste-ul">
                  <li className="patients-page-liste-li">Clark</li>
                  <li className="patients-page-liste-li">Constant</li>
                </ul>
              </div>
 */}
            </div>

            <AlphabeticalSearchbar />
          </div>
        <Nav />
      </div>
    
  )
};

// == Export
export default PatientsPage;
