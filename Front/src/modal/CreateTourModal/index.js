import React, { useEffect, Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';

// == Import
import './createTourModal.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';

const CreateTourModal = ({
  closeModalCreateTour,
  changeField,
  handleTour,
  tour_date,
  datePlace,
  changeTourDate,

}) => {

const[dateTampon, setDateTampon] =useState(datePlace); 

//chargement dans l'input de la date courante de la page



  //REDIRECTION à la date
  const history = useHistory();
  const routeTourByDate = () =>{ 
    let path = `/tour/${dateTampon}`; 
    history.push(path);
  }
       
  console.log("tour_date", tour_date);

  const handleChange = (evt) => {
    setDateTampon(evt.target.value);
    console.log('datetampon', dateTampon);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("je suis dans handlesumbit");
    console.log("datePlace dans handlesubmit", datePlace);
    changeTourDate(dateTampon);
    console.log("tour_date dans handlesubmit", tour_date);
    handleTour();
    routeTourByDate();
    closeModalCreateTour();
  };

  /* Function change target type onFocus */
  const onFocus = (event) => {
    event.currentTarget.type = "date";
  }

  console.log("date place", datePlace);

  return (
    <div className="modal-entry">
    <form className="form" onSubmit={handleSubmit}>
    <img  className="modal-patient-close" alt="close" src={close} onClick={closeModalCreateTour}/>
      <input
        className="form-input"
        name="tour_date"
        type="text"
        value={dateTampon}
        onChange={handleChange}
        onFocus={onFocus}
        placeholder="Date de la tournée"
      />
      <img className="modal-patient-update-img" src={check} alt="valider" onClick={handleSubmit}/>
    </form>
  </div>
  )
};

export default CreateTourModal;
