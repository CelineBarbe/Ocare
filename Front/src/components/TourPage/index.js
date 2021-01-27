// == Import npm
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
const arrayMove = require('array-move');
// == Import
import './tourPage.scss';

// == Import images
import arrow_left from 'src/assets/icones/arrow_left.svg';
import arrow_right from 'src/assets/icones/arrow_right.svg';
import plus from 'src/assets/icones/plus2.svg';
import calendar from 'src/assets/icones/calendar.svg';


// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import AddPatientModal from 'src/modal/AddPatientModal';
import CreateTourModal from 'src/containers/CreateTourModal';

import {data} from 'src/utils/data';


// == Composant
const TourPage = () => {

/*Hook for MODAL add patient and create tour */
const [addPatientModal,setAddPatientModal] = useState(false);
const [createTourModal,setCreateTourModal] = useState(false);
/* open and close ADD PATIENT modal function */
function openModalAddPatient() {
  setAddPatientModal(true);
}
function closeModalAddPatient(){
  setAddPatientModal(false);
}

/* open and close CREATE TOUR modal function */
function openModalCreateTour() {
  setCreateTourModal(true);
}

function closeModalCreateTour(){
  setCreateTourModal(false);
}

  let [cards,setCards] = useState(data);
  
  const arraySortOrder = (array) => {
    const arrayReturn = array.map((item,index) => {
      let newItem = {...item};
      newItem.order=(index+1);
      return newItem;
    })
    return arrayReturn;
  }

  //card 
  const Card = SortableElement((props) => (
  <div className="planning-container-row" key={props.id} id={props.id} order={props.order}>
                  <div className="planning-container-row-middle">
                  <Link to='/patient'><span className="planning-container-row-left-name">Mr {props.nom}</span></Link>
                  </div> 
                  <div className="planning-container-row-right">
                  <span className="planning-container-row-right-care">{props.tag}</span>
                  </div>
  </div>)
  )
//list journée
  const SortableList = SortableContainer(({items}) => {
    return (
      <div className="planning-container">
      {
        addPatientModal   
        ? <AddPatientModal closeModalAddPatient={closeModalAddPatient}/>
        : null
      }
      {
        createTourModal
        ? <CreateTourModal closeModalCreateTour={closeModalCreateTour}/>
        : null
      }
      
        {items.map((item, index) => (
          <Card key={`item-${item.id}`} index={index} nom={item.nom} tag={item.tag} id={item.id} order={item.order} />
        ))}
      </div>
    );             
  });

  const onSortEnd = ({oldIndex, newIndex}) => {
    //renvoi un nouveau tableau dans le bon ordre suite au nouveau ytableau de fin de drag
     setCards((cards) => arraySortOrder(arrayMove(cards, oldIndex, newIndex)));
  }

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
              
              <div className="button-container">
                <div className="tour-page-create-patient">
                  <span className="tour-page-create-patient-title">Ajouter un patient</span>
                  <img className="tour-page-create-patient-img" src={plus} alt="ajouter" onClick={openModalAddPatient}/>  
                </div>
                <div className="tour-page-create-tour">
                  <span className="tour-page-create-tour-title">Créer une tournée</span>
                  <img className="tour-page-create-tour-img" src={calendar} alt="ajouter" onClick={openModalCreateTour}/>  
                </div>
              </div>
              <SortableList items={cards} onSortEnd={onSortEnd} />
            </div>
          </div>
        <Nav />
      </div>
  )
};

// == Export
export default TourPage;
