import React, { useEffect, Fragment, useState } from 'react';

// == Import
import './addPatientModal.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';

import TourEntryModal from 'src/containers/TourEntryModal'

import search from 'src/assets/icones/search.svg';

import {returnArrayHandleChange} from 'src/utils/searchAndReturn';

const AddPatientModal = ({
  closeModalAddPatient,
  list,
  inputSearchPatient,
  changeField,
  getPatients,
  handleUpdateTour,
}) => {
  useEffect(() => {
    getPatients();
  }, [])
const [result,setResult] = useState([]);
const [tourEntry,setTourEntry] = useState(false);
const [id, setId] = useState(0);

function openModalEntry() {
  setTourEntry(true);
}

function closeModalEntry(){
  setTourEntry(false);
}
  //events
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
    setResult(returnArrayHandleChange(list, evt.target.value));
    //TODO return patients letter
  };

  const handleClick = (_,id) => {
    openModalEntry();
    setId(id);
  }


  

  const SearchResult = () => {
    console.log("Resulat dans SearchResult", result);
    return (
      <div className="searchResult">
      {
        result.length >=1 
        ? result.map(patient => (
          <p className="searchResult-name" key={patient.lastname} onClick={(e) => handleClick(e, patient.id)}>{patient.lastname}</p>
        ))
       : null  
      }
      </div>
    )
  }
      
  return (
    <div className="modal-entry-patient">
    { 
     tourEntry
     ? <TourEntryModal patientId={id} closeModalEntry={closeModalEntry} closeModalAddPatient={closeModalAddPatient} />
     : null
    }
    
    <div className="form">
    <img  className="modal-entry-patient-close" alt="close" src={close} onClick={closeModalAddPatient}/>
    <p className="modal-entry-patient-title">Recherchez un patient</p>
      <div className="searchbar-container">
      <form className="searchbar">
            <input 
              className="form-input" 
              type="text" 
              placeholder="nom"
              name="inputSearchPatient"
              value={inputSearchPatient}
              onChange={handleChange}
            />    
      </form>  
      {result.length >= 1
      ? <SearchResult />
      : null
      }
      </div>
    </div>
  </div>
  )
};

export default AddPatientModal;
