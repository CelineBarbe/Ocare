// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import
import './main.scss';

// == Import components
import Searchbar from 'src/components/Searchbar';
import Transmission from 'src/components/Transmission';
import Patients from 'src/components/Patients';
import Tour from 'src/components/Tour';

// == Composant
const Main = () => (
  <main className="main">
    <Searchbar />
    <Transmission />
    <Link to="/Patients">
      <Patients />
    </Link>
    <Tour />
  </main>
);

// == Export
export default Main;
