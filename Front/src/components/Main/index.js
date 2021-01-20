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

// == Composant
const Main = () => (
  <main className="main">
  
      <Searchbar />
      <Transmission />
      <Link to='/patients'>
        <Patients />
      </Link>
      <Tour />
    
  </main>
);

// == Export
export default Main;
