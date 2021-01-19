// == Import npm
import React from 'react';

// == Import
import './searchbar.scss';


// == Composant
const Searchbar = ({changeField, handleSubmit, inputSearchDashboard}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };
  return <form className="searchbar" onSubmit={onSubmitForm}>
          <input type="text" 
            className="searchbar-input"
            placeholder="Recherche..."
            name="inputSearchDashboard"
            value={inputSearchDashboard}
            onChange={handleChange}
          />
       </form>
};

// == Export
export default Searchbar;
 