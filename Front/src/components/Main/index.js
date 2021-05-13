// == Import npm
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// == Import
import './main.scss';

// == Import components
import Searchbar from 'src/containers/Searchbar';
import Transmission from 'src/components/Transmission';
import Tour from 'src/containers/Tour';

// == Composant
const Main = () => (
  <main className="main">
  
      <Searchbar />
      <Tour />   
      <Transmission />  
    
  </main>
);

// == Export
export default Main;
