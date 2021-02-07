// == Import npm
import React, { Fragment, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import {returnArrayHandleChange} from 'src/utils/searchAndReturn';

import search from 'src/assets/icones/search.svg';

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
    <div className="searchbar-container">
      <form className="searchbar">
            <input 
            className="searchbar-input" 
              type="text" 
              placeholder="Rechercher un patient..."
              name="inputSearchDashboard"
              value={inputSearchDashboard}
              onChange={handleChange}
              onFocus={onFocusInput}
            />
            <img src={search} alt="loupe" className="searchbar-img"/>       
      </form>  
      {result.length >= 1
      ? <SearchResult />
      : null
      }
        
    </div>
  )
};

// == Export
export default Searchbar;
 