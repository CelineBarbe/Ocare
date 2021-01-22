// == Import npm
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
// == Import
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import './createpatient.scss';

// == Composant
const CreatePatient = ({
  firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, isCreated, changeField, handleSubmitPatient
}) => {
  //REDIRECTION dashboard
  const history = useHistory();
  const dashboard = () =>{ 
    let path = `/Dashboard`; 
    history.push(path);
  }

  //Redirection ?
  useEffect(() => { isCreated ? dashboard() : null}, [isCreated])
  
  //events
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitCab();
  };
  return (
    <>
    <Header />
    <div className="main">
    <h2 className="title-page">Création de Patient</h2>
    <form className="form" onSubmit={handleSubmit}>
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
        type="text"
        name="lastname"
        placeholder="Nom"
        value={lastname}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="address"
        placeholder="Adresse"
        value={address}
        onChange={handleChange}
      />
      <input
      className="form-input"
      type="text"
      name="zip_code"
      placeholder="Code Postal"
      value={zip_code}
      onChange={handleChange}
    />
      <input
        className="form-input"
        type="text"
        name="newEntryCity"
        placeholder="Ville"
        value={newEntryCity}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="password"
        name="newEntryPin_code"
        placeholder="Code Pin du cabinet"
        value={newEntryPin_code}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="phone"
        name="newEntryPhone_number"
        placeholder="Téléphone"
        value={newEntryPhone_number}
        onChange={handleChange}
      />
      
      <button type="button" className="form-button" onClick={handleSubmit}>
        Créer le cabinet !
      </button>
    </form>
    </div>
    <Nav />
  </>
  );
};

// == Export
export default CreatePatient;
