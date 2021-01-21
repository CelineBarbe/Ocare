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
import woman from 'src/assets/images/woman.svg';


// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import Transmission from 'src/components/Transmission';


// == Composant
const TransmissionPage = () => {
  return (
    
      <div className="transmission-page-container">
        <Header />
          <div className="main">
            <div className="transmission-page">
              <Transmission />
              <div className="transmission-container">

                <div className="transmission-container-row">
                  <div className="transmission-container-row-left">
                    <img className="transmission-container-row-left-img" alt="woman" src={woman}/>
                  </div>
                  
                  <div className="transmission-container-row-right">
                    <h1>Mr Pichon</h1>
                    <p></p>
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
