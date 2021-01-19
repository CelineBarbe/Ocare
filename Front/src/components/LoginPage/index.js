// == Import npm
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// == Import
import './loginPage.scss';

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
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      <button type="button" className="form-button" onClick={handleLogin}>
        Se connecter
      </button>
    </form>
  );
};

// == Export
export default LoginPage;
