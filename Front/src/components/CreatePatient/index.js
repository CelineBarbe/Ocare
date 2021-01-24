// == Import npm
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
// == Import
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import './createpatient.scss';

// == Composant
const CreatePatient = ({
  firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, isCreated, changeField, handleSubmitPatient, handleReset, created_id
}) => {
  //REDIRECTION dashboard
  const history = useHistory();
  const dashboard = () =>{ 
    let path = `/patient/${created_id}`; 
    history.push(path);
  }

  //Redirection ?
  useEffect(()=> {handleReset()}, []);
  useEffect(() => { isCreated ? dashboard() : null}, [isCreated])
  
  //events
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleChecked =(event) => {
    changeField(event.target.checked, event.target.name);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitPatient();
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
        type="date"
        name="birthdate"
        placeholder="Date de Naissance"
        value={birthdate}
        onChange={handleChange}
      />
      <select id="gender" name="gender" value={gender} onChange={handleChange}
>
        <option value="male"> Homme</option>
        <option value="female">Femme</option>
      </select>
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
        type="phone"
        name="phone_number"
        placeholder="Téléphone"
        value={phone_number}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="pathology"
        placeholder="Pathologie"
        value={pathology}
        onChange={handleChange}
      />
      <input type="checkbox" id="isQuotidien" name="daily_checking" onChange={handleChecked} value={daily_checking}
/>
      <label htmlFor="isQuotidien">Patient Quotidien</label>
      {daily_checking ? <input type="number" placeholder="Nombre de visite/jour" name="number_daily_checking" min='0' max='3'/> : null}
      <button type="button" className="form-button" onClick={handleSubmit}>
        Créer le Patient !
      </button>
    </form>
    </div>
    <Nav />
  </>
  );
};

// == Export
export default CreatePatient;
