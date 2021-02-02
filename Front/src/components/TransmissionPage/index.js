// == Import npm
import React, {useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
var { DateTime } = require('luxon');
// == Import
import './transmissionPage.scss';

// == Import images
import arrow_left from 'src/assets/icones/arrow_left.svg';
import arrow_right from 'src/assets/icones/arrow_right.svg';
import plus from 'src/assets/icones/plus2.svg';
import calendar from 'src/assets/icones/calendar.svg';
import F from 'src/assets/images/woman.svg';
import M from 'src/assets/images/man.svg';


// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import Transmission from 'src/components/Transmission';




// == Composant
const TransmissionPage = ({list, getLogs, isLoading, byDate, getLogsByDate, location}) => {
  const date = useParams()?.date ?? DateTime.local().toISODate();
  console.log('date', date);
  console.log('dateTim', );
  //load data cf bydate
  useEffect(() => {
    getLogsByDate(date)
  }, [])

  useEffect(() => {
    console.log('location change')
    getLogsByDate(date)
  }, [location])

  let datePres = DateTime.fromISO(date);

/*  (() => {
    if(!date) {
      datePres = DateTime.local();
      
    } else {
      datePres = DateTime.fromISO(date)
    }
  })(); */
  
  /*composant défaut lorsqu'il n'y a pas de log présent */
  const DefaultComponant = () => {
  return (
    <h1 className="default-title">Aucune transmission pour le {datePres.day} {datePres.monthLong}</h1>
  )
  }

  return (
    
      <div className="transmission-page-container">
        <Header />
          <div className="main">
            <div className="transmission-page">
              <Transmission />
              <div className="transmission-container">
                <h1 className="transmission-h1"> Transmission du {datePres.day} {datePres.monthLong}</h1>
               
              {isLoading
              ? 'data is loading' 
              : list.length>1 ? list.map(element => ( 
                <Link to={`/patient/${element.patient_id}`} key={element.id} className="link">
                      <div className="transmission-container-row" >
                        <div className="transmission-container-row-left primary ">
                          <img className="transmission-container-row-left-img" alt="woman" src={element.gender == 'F'? F : M}/>
                        </div>
                          <div className="transmission-container-row-right secondary">
                          <h3>{element.lastname}</h3>
                            <p>{element.observations}</p>
                          </div>  
                          
                    </div>
                </Link>
                    ))
              : <DefaultComponant/>
              }

                {/* <div className="transmission-container-row">
                  <div className="transmission-container-row-left primary ">
                    <img className="transmission-container-row-left-img" alt="woman" src={woman}/>
                  </div>
                  <div className="transmission-container-row-right secondary">
                    <h3>Mme Pichon</h3>
                    <p>Nouvelle ordonnance prévoir pansement à partir du 25/01 pendant 1 semaine</p>
                  </div>
                </div>

                <div className="transmission-container-row">
                  <div className="transmission-container-row-left secondary ">
                    <img className="transmission-container-row-left-img" alt="woman" src={man}/>
                  </div>
                  <div className="transmission-container-row-right primary ">
                    <h3>Mr Durand</h3>
                    <p>R.A.S</p>
                  </div>
                </div>

                <div className="transmission-container-row">
                  <div className="transmission-container-row-left primary ">
                    <img className="transmission-container-row-left-img" alt="woman" src={woman}/>
                  </div>
                  <div className="transmission-container-row-right secondary">
                    <h3>Mme Armand</h3>
                    <p>Prise de sang à faire le 23</p>
                  </div>
                </div>

                <div className="transmission-container-row">
                  <div className="transmission-container-row-left secondary ">
                    <img className="transmission-container-row-left-img" alt="woman" src={man}/>
                  </div>
                  <div className="transmission-container-row-right primary ">
                    <h3>Mr Gérard</h3>
                    <p>Surveiller tension, basse depuis 2 jours.</p>
                  </div>
                </div>

                <div className="transmission-container-row">
                  <div className="transmission-container-row-left secondary ">
                    <img className="transmission-container-row-left-img" alt="woman" src={man}/>
                  </div>
                  <div className="transmission-container-row-right primary ">
                    <h3>Mr Pierre</h3>
                    <p>R.A.S</p>
                  </div>
                </div>

                <div className="transmission-container-row">
                  <div className="transmission-container-row-left secondary ">
                    <img className="transmission-container-row-left-img" alt="woman" src={man}/>
                  </div>
                  <div className="transmission-container-row-right primary ">
                    <h3>Mr Alibert</h3>
                    <p>Injection du 23/01 au 27/01</p>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        <Nav />
      </div>
  )
};

// == Export
export default TransmissionPage;
