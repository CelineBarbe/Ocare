// == Import npm
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
// == Import
import './signupPage.scss';

// == Composant
const SignupPage = ({
  email, password, phone_number, lastname, firstname, siren_code, changeField, handleSignup, isSigned
}) => {
  //REDIRECTION dashboard
  const history = useHistory();
  const routeDashboard = () =>{ 
    let path = `/login`; 
    history.push(path);
  }
  useEffect(() => { isSigned ? routeDashboard() : null}, [isSigned])
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignup();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
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
