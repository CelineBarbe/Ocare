// == Import npm
import React from 'react';

// == Import
import './main.scss';

// == Import components
import Searchbar from 'src/components/Searchbar';
import Transmission from 'src/components/Transmission';
import Patients from 'src/components/Patients';
import Tour from 'src/components/Tour';


// == Composant
const Main = () => {
  return <main className="main">
        <Searchbar />
        <Transmission />
        <Patients />
        <Tour />
  </main>
};

// == Export
export default Main;
