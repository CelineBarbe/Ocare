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
// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route exact path="/Login"><LoginPage /></Route>
      <Route exact path="/Signup"><SignupPage /></Route>
      <Route exact path="/Dashboard"><Dashboard /> </Route>
      <Route exact path="/cabinet"><CabinetPage /></Route>
    </Switch>
  </div>
);

// == Export
export default App;
