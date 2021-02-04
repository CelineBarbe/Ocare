// == Import npm
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// == Import
import './loginPage.scss';

import Notification from 'src/containers/Notification';

import logoVertTop from 'src/components/LoginPage/coin_vert_haut.svg';
import logoRoseTop from 'src/components/LoginPage/coin_rose_haut.svg';
import logoVertBot from 'src/components/LoginPage/coin_vert.svg';
import logoRoseBot from 'src/components/LoginPage/coin_rose.svg';


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
      <div className="container-top">
        <Notification />
        <div className="logo-container">
          <img src={logoVertTop} className="top-left logo" alt="logo"/>
          <img src={logoRoseTop} className="top-right logo" alt="logo"/>
          <img src={logoVertBot} className="bot-left logo" alt="logo"/>
          <img src={logoRoseBot} className="bot-right logo" alt="logo"/>
        </div>
        
        <h1 className="login-container-title">care</h1>
      </div>
      <div className="container-bot">
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
        <p className="inscription">Inscription</p>
      </div>
    </div>
  );
};

// == Export
export default LoginPage;
