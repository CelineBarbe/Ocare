// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import
import './transmissionPage.scss';

// == Import images
import arrow_left from 'src/assets/icones/arrow_left.svg';
import arrow_right from 'src/assets/icones/arrow_right.svg';
import plus from 'src/assets/icones/plus2.svg';
import calendar from 'src/assets/icones/calendar.svg';


// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import Transmission from 'src/components/Transmission';


// == Composant
const TransmissionPage = () => {
  return (
    
      <div className="tour-page-container">
        <Header />
          <div className="main">
            <div className="tour-page">
              <Transmission />
              <div className="planning-container container-transmission">

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h00</span>
                  </div>
                  <div className="planning-container-row-middle">
                  <Link to='/patient'><span className="planning-container-row-left-name">Mr Pichon</span></Link>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Pansement</span>
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
export default TransmissionPage;
