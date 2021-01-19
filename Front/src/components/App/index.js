/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './app.scss';

// == Import components
import Dashboard from 'src/components/Dashboard';
import HomePage from 'src/components/HomePage';
import LoginPage from 'src/containers/LoginPage';
import SignupPage from 'src/containers/SignupPage';
import CabinetPage from 'src/components/CabinetPage';
import CabinetsPage from 'src/components/CabinetsPage';
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
    </Switch>
  </div>
);

// == Export
export default App;
