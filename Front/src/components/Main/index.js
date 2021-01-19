// == Import npm
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// == Import
import './main.scss';

// == Import components
import Searchbar from 'src/containers/Searchbar';
import Transmission from 'src/components/Transmission';
import Patients from 'src/components/Patients';
import Tour from 'src/components/Tour';
import CabinetPage from 'src/components/CabinetPage';
import CabinetsPage from 'src/components/CabinetsPage';

// == Composant
const Main = () => (
  <main className="main">
  
      <Searchbar />
      <Transmission />
      <Patients />
      <Tour />
    
  </main>
);

// == Export
export default Main;
