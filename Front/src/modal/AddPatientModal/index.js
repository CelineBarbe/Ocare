import React, { useEffect, Fragment, useState } from 'react';

// == Import
import './addPatientModal.scss';

//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';

import TourEntryModal from 'src/containers/TourEntryModal'

import {returnArrayHandleChange} from 'src/utils/searchAndReturn';

const AddPatientModal = ({
  closeModalAddPatient,
  list,
  inputSearchPatient,
  changeField,
  getPatients
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

  const handleSubmit = (evt) => {
    evt.preventDefault();

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
    <div className="modal-entry">
    { 
     tourEntry
     ? <TourEntryModal patientId={id} />
     : null
    }
    
    <form className="form">
    <img  className="modal-patient-close" alt="close" src={close} onClick={closeModalAddPatient}/>
      <input
        className="form-input"
        type="text"
        name="inputSearchPatient"
        value={inputSearchPatient}
        placeholder="nom"
        onChange={handleChange}
      />
      <SearchResult /> 
    </form>
  </div>
  )
};

export default AddPatientModal;
