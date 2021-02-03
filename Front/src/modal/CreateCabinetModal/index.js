// == Import npm
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
// == Import

import './createcabinetmodal.scss';


//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/checkWhite.svg';

// == Composant
const CreateCabinet = ({
  newEntryName, 
  newEntryAddress, 
  newEntryZip_code, 
  newEntryCity, 
  newEntryPhone_number, 
  newEntryPin_code, 
  isCreated, 
  changeField, 
  handleSubmitCab, 
  handleReset,
  closeModalCreateCabinet,
  changeCabinet,
  id,
  isLoading,
}) => {
  //REDIRECTION dashboard
  const history = useHistory();
  const dashboard = () =>{ 
    changeCabinet(id);
    let path = `/Dashboard`; 
    history.push(path);
  }

  //Redirection ?
  useEffect(() => { isCreated ?  dashboard(): null}, [isCreated])
  
  //events
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitCab();
  };

  const closeForm = () => {
    let path = `/cabinet`;
    history.push(path);
  }
  return (

    <div className="create-cabinet">
      <form className="form" onSubmit={handleSubmit}>
      <img  className="modal-patient-close" alt="close" src={close} onClick={closeForm}/>
        <input
          className="form-input"
          type="text"
          name="newEntryName"
          placeholder="Nom"
          value={newEntryName}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="newEntryAddress"
          placeholder="Adresse"
          value={newEntryAddress}
          onChange={handleChange}
        />
        <input
        className="form-input"
        type="text"
        name="newEntryZip_code"
        placeholder="Code Postal"
        value={newEntryZip_code}
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
        
        <div className="submit-update" onClick={handleSubmit}>
          <span className="modal-patient-update-img-title">Valider</span>
          <img className="modal-patient-update-img" src={check} alt="valider"/>
      </div>
      </form>
    </div>
  );
};

// == Export
export default CreateCabinet;
