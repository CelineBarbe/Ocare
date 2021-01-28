// == Import npm
import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
var { DateTime } = require('luxon');
const arrayMove = require('array-move');
// == Import
import './tourPage.scss';

// == Import images
import arrow_left from 'src/assets/icones/arrow_left.svg';
import arrow_right from 'src/assets/icones/arrow_right.svg';
import plus from 'src/assets/icones/plus2.svg';
import calendar from 'src/assets/icones/calendar.svg';
import check from 'src/assets/icones/check.svg';


// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import AddPatientModal from 'src/containers/AddPatientModal';
import CreateTourModal from 'src/containers/CreateTourModal';

import {data} from 'src/utils/data';


// == Composant
const TourPage = ({list, date, date_tour, changeDate, location, getTour, updateTour, submitUpdateTour}) => {
  //LOADING DATE TODAY
  //date vaut path ou now
  const datePlace = useParams()?.date ?? DateTime.local().toISODate();
  let [cards,setCards] = useState([]);
  
  useEffect(()=> {
  if (list.length >= 1){
    setCards(list);
  }
  },[list])
  
  
  console.log('list', list);
  console.log('card', cards);
  useEffect(() => {
    //par défaut charge la date du jour sinon la date de l'url
    console.log('passe par le useEffect location change')
    changeDate(datePlace);
    getTour();
  }, [location])

  /*useEffect(() => {
    setCards(list);
    console.log('useEffect set Cards, list:', list)
    console.log('card:',cards);
  }, []) */

  useEffect(() => {
    console.log("Update tour cards :", cards );
    updateTour(cards);
  }, [cards])

  

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

/* Function submit update tour */
function handleUpdateTour() {
  submitUpdateTour();
}

const arraySortStarting = (array) => {
  array.sort((a,b)=> {
    a.order_tour - b.order_tour;
  })
}

  const arraySortOrder = (array) => {
    const arrayReturn = array.map((item,index) => {
      let newItem = {...item};
      //order tout court!
      newItem.order_tour=(index+1);
      return newItem;
    })
    return arrayReturn;
  }

  //card 
  const Card = SortableElement((props) => (
  <div className="planning-container-row" key={props.logbook_id} id={props.logbook_id} order={props.order}>
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
        ? <CreateTourModal closeModalCreateTour={closeModalCreateTour}  datePlace={datePlace}/>
        : null
      }
      
        {items.map((item, index) => (
          <Card key={`item-${item.logbook_id}`} index={index} nom={item.lastname} tag={item.medical_act_name} id={item.logbook_id} order={item.order_tour} />
        ))}
      </div>
      
    );             
  });

  const onSortEnd = ({oldIndex, newIndex}) => {
    //renvoi un nouveau tableau dans le bon ordre suite au nouveau ytableau de fin de drag
     setCards((cards) => arraySortOrder(arrayMove(cards, oldIndex, newIndex)));
  }

  //Return date +indice day
  const datePlus = (date, indice) => {
    const dateIndice = DateTime.fromISO(date).plus({days: indice});
    return dateIndice.toISODate();
  }

  return (
    
      <div className="tour-page-container">
        <Header />
          <div className="main">
            <div className="tour-page">

              <div className="tour-date">
                <div className="tour-date-previous">
                <Link to={`/tour/${datePlus(date, -1)}`}><img src={arrow_left} className="tour-date-img" alt="fleche" /></Link>
                
                </div>
                <div className="tour-date-now">
                  <h1 className="tour-date-now-title">{DateTime.fromISO(date).weekdayLong}</h1>
                  <span className="tour-date-now-title-span">{DateTime.fromISO(date).day}/{DateTime.fromISO(date).month}</span>
                </div>
                <div className="tour-date-next">
                  <Link to={`/tour/${datePlus(date, 1)}`}><img src={arrow_right} className="tour-date-img" alt="fleche" /></Link>
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
              {!list.length<=1 ?<SortableList items={cards} onSortEnd={onSortEnd} /> : null}
              <img className="modal-patient-update-img" src={check} alt="valider" onClick={handleUpdateTour}/>
            </div>
          </div>
        <Nav />
      </div>
  )
};

// == Export
export default TourPage;
