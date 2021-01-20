// == Import npm
import React, { Fragment } from 'react';
// == Import
import './tourPage.scss';

// == Import images
import arrow_left from 'src/assets/icones/arrow_left.svg';
import arrow_right from 'src/assets/icones/arrow_right.svg';
import plus from 'src/assets/icones/plus2.svg';


// == Import 
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';


// == Composant
const TourPage = () => {
  return (
    
      <div className="tour-page-container">
        <Header />
          <div className="main">
            <div className="tour-page">

              <div className="tour-date">
                <div className="tour-date-previous">
                  <img src={arrow_left} className="tour-date-img" alt="fleche" />
                </div>
                <div className="tour-date-now">
                  <h1 className="tour-date-now-title">Jeudi</h1>
                  <span className="tour-date-now-title-span">21/01</span>
                </div>
                <div className="tour-date-next">
                  <img src={arrow_right} className="tour-date-img" alt="fleche" />
                </div>
              </div>

              <div className="tour-page-create">
                <span className="tour-page-create-title">Ajouter un patient</span>
                <img className="tour-page-create-img" src={plus} alt="ajouter"/>  
              </div>

              <div className="planning-container">

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h00</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Pichon</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Pansement</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h15</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Robert</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Prise de sang</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h30</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Alibert</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Toilette</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h45</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mme Michelle</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Injection</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">7h00</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mme Tourner</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Pose de sonde intraveineuse</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">7h15</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr truc</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Toilette</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h00</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Pichon</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Pansement</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h15</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Robert</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Prise de sang</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h00</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Pichon</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Pansement</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h15</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Robert</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Prise de sang</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h00</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Pichon</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Pansement</span>
                  </div>
                </div>

                <div className="planning-container-row">
                  <div className="planning-container-row-left">
                    <span className="planning-container-row-left-hour">6h15</span>
                  </div>
                  <div className="planning-container-row-middle">
                    <span className="planning-container-row-left-name">Mr Robert</span>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">Prise de sang</span>
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
export default TourPage;
