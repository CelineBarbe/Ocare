// == Import npm
import React from 'react';

// == Import
import './signupPage.scss';

// == Composant
const SignupPage = ({
  email, password, phoneNumber, lastName, firstName, SIRENCode, changeField, handleSignup,
}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  return (
    <form className="form">
      <input
        className="form-input"
        type="text"
        name="lastName"
        placeholder="Nom"
        value={lastName}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="firstName"
        placeholder="Prénom"
        value={firstName}
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
        name="phoneNumber"
        placeholder="Téléphone"
        value={phoneNumber}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="SIRENCode"
        placeholder="Code SIREN"
        value={SIRENCode}
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
