// == Import npm
import React from 'react';

// == Import
import './loginPage.scss';

// == Composant
const LoginPage = ({
  email, password, changeField, handleLogin,
}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  return (
    <form className="form">
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
