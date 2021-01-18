// == Import npm
import React from 'react';

// == Import
import './searchbar.scss';


// == Composant
const Searchbar = () => {
  return <form className="searchbar">
        <input type="text" className="searchbar-input" placeholder="Recherche..."/>
  </form>
};

// == Export
export default Searchbar;
