// == Import npm
import React from 'react';

// == Import
import './signupPage.scss';

// == Composant
const SignupPage = () => {
  return (
  <form className="form">
      <input className="form-input" type="text" name="nom" placeholder="Nom"/>
      <input className="form-input" type="text" name="prenom" placeholder="Prénom"/>
      <input className="form-input" type="email" name="email" placeholder="Mail"/>
      <input className="form-input" type="password" name="password" placeholder="Password"/>
      <input className="form-input" type="phone" name="phone" placeholder="Téléphone"/>
      <input className="form-input" type="number" name="siren" placeholder="Siren"/>
      <button className="form-button">
        S'inscrire !
      </button> 
  </form>)
};

// == Export
export default SignupPage;
