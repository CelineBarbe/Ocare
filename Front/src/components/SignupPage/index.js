// == Import npm
import React from 'react';

// == Import
import './signupPage.scss';

// == Composant
const SignupPage = ({
  email, password, phone_number, lastname, firstname, siren_code, changeField, handleSignup,
}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  return (
    <form className="form">
      <input
        className="form-input"
        type="text"
        name="lastname"
        placeholder="Nom"
        value={lastname}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="firstname"
        placeholder="Prénom"
        value={firstname}
        onChange={handleChange}
      />
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
      <input
        className="form-input"
        type="phone"
        name="phone_number"
        placeholder="Téléphone"
        value={phone_number}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="siren_code"
        placeholder="Code SIREN"
        value={siren_code}
        onChange={handleChange}
      />
      <button type="button" className="form-button" onClick={handleSignup}>
        S'inscrire !
      </button>
    </form>
  );
};

// == Export
export default SignupPage;
