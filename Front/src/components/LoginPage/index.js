// == Import npm
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// == Import
import './loginPage.scss';

import Notification from 'src/containers/Notification';
import logo from 'src/assets/images/logo.svg';

// == Composant
const LoginPage = ({
  email, password, changeField, handleLogin, isLogged
}) => {
  //REDIRECTION dashboard
  const history = useHistory();
  const routeDashboard = () =>{ 
    let path = `/Dashboard`; 
    history.push(path);
  }
  useEffect(() => { isLogged ? routeDashboard() : null}, [isLogged])

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
 
  return (
    <div className="login-container">
      <Notification />
    <div className="login-container-top">
      <h1 className="login-container-title">O'CARE</h1>
      <img src={logo} className="login-container-logo" alt="logo"/>
    </div>
    <div className="login-container-bot">
    <form className="login-container-form" onSubmit={handleSubmit}>
        <input
          className="login-container-form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="login-container-form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="login-container-form-button" onClick={handleLogin}>
          Se connecter
        </button>
      </form>
    </div>
    
    
      
    </div>
  );
};

// == Export
export default LoginPage;
