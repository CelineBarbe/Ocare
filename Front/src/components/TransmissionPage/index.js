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
    
      <>
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
              </div>
            </div>
          </div>
        <Nav />
      </>
  )
};

// == Export
export default TransmissionPage;
