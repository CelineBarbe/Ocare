/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './app.scss';

// == Import components
import Dashboard from 'src/containers/Dashboard';
import HomePage from 'src/components/HomePage';
import LoginPage from 'src/containers/LoginPage';
import SignupPage from 'src/containers/SignupPage';
import CabinetPage from 'src/containers/CabinetPage';
import CabinetsPage from 'src/containers/CabinetsPage';
import PatientsPage from 'src/components/PatientsPage';
import ProfilPage from 'src/components/ProfilPage';
import PatientPage from 'src/components/PatientPage';
import TourPage from 'src/components/TourPage';
import TransmissionPage from 'src/components/TransmissionPage';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route exact path="/login"><LoginPage /></Route>
      <Route exact path="/signup"><SignupPage /></Route>
      <Route exact path="/dashboard"><Dashboard /> </Route>
      <Route exact path="/cabinet"><CabinetPage /></Route>
      <Route exact path="/cabinets"><CabinetsPage /></Route>
      <Route exact path="/patients"><PatientsPage /></Route>
      <Route exact path="/profil"><ProfilPage /></Route>
      <Route exact path="/patient"><PatientPage /></Route>
      <Route exact path="/tour"><TourPage /></Route>
      <Route exact path="/transmission"><TransmissionPage /></Route>
    </Switch>
  </div>
);

// == Export
export default App;
