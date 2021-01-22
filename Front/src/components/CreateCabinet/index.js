// == Import npm
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
// == Import
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import './createcabinet.scss';

// == Composant
const CreateCabinet = ({
  name, address, zip_code, city, phone_number, pin_code, isCreated, changeField, handleSubmitCab, handleReset
}) => {
  //REDIRECTION dashboard
  const history = useHistory();
  const routeDashboard = () =>{ 
    let path = `/dashboard`; 
    history.push(path);
  }
  //reset des champs
  useEffect(()=> handleReset(), [])
  //Redirection ?
  useEffect(() => { isCreated ? routeDashboard() : null}, [isCreated])
  
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
    <h2 className="title-page">création de cabinet</h2>
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Nom"
        value={name}
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
        name="city"
        placeholder="Ville"
        value={city}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="password"
        name="pin_code"
        placeholder="Code Pin du cabinet"
        value={pin_code}
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
export default CreateCabinet;
