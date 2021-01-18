// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './app.scss';

// == Import components
import Dashboard from 'src/components/Dashboard';
import HomePage from 'src/components/HomePage';
import LoginPage from 'src/components/LoginPage';
import SignupPage from 'src/components/SignupPage';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route exact path="/Login"><LoginPage /></Route>
      <Route exact path="/Signup"><SignupPage /></Route>
      <Route exact path="/Dashboard"><Dashboard /> </Route>
    </Switch>
  </div>
);

// == Export
export default App;
