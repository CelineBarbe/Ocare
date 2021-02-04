// == Import npm
import React, { Fragment, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import {returnArrayHandleChange} from 'src/utils/searchAndReturn';

// == Import
import './searchbar.scss';


// == Composant
const Searchbar = ({
  changeField, 
  onSubmit, 
  inputSearchDashboard,
  list,
  getPatients,
}) => {

  const [result,setResult] = useState([]);

  const onFocusInput = () => {
    getPatients();
  }

  //events
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
    setResult(returnArrayHandleChange(list, evt.target.value));
  };

  const SearchResult = () => {
    console.log("Resulat dans SearchResult", result);
    return (
      <div className="searchResult">
      {
        result.length >=1 
        ? result.map(patient => (
          <p className="searchResult-name" key={patient.id}>
          <Link to={`/patient/${patient.id}`}>{patient.lastname} {patient.firstname}</Link>
          </p>
        ))
       : null  
      }
      </div>
    )
  }

  return (
    <Fragment>
    <form className="searchbar">
          <input type="text" 
            className="searchbar-input"
            placeholder="Rechercher un patient..."
            name="inputSearchDashboard"
            value={inputSearchDashboard}
            onChange={handleChange}
            onFocus={onFocusInput}
          />
    </form> 
    <SearchResult />
    </Fragment>
  )
};

// == Export
export default Searchbar;
 