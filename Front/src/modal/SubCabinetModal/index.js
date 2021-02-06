import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// == Import
import './SubCabinetModal.scss';

import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/checkWhite.svg';


const SubCabinetModal = ({ 
  closeModalSubCabinet, 
  newEntryName, 
  newEntryPin_code, 
  changeField, 
  handleSubCabinet,
  id,
}) => {

  /* Hook d'état pour redirect */
  const [isSubscribe,setSubscribe] = useState(false);
  const history = useHistory();

  function toggleSubscribe() {
    if (isSubscribe) {
      setSubscribe(false);
    } else {
      setSubscribe(true);
      let path = `/dashboard`; 
      history.push(path);
    }
  }


  //Redirection ?
  useEffect(() => { isSubscribe ? toggleSubscribe() : null}, [isSubscribe])

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubCabinet(id);
    closeModalSubCabinet();
  };

  return (
    <div className="modal-sub-cabinet">
      <img src={close} alt="stylo" className="modal-sub-cabinet-close" onClick={closeModalSubCabinet}/>
      <p className="modal-sub-cabinet-title">
       Rejoindre un cabinet 
      </p>
      <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        name="newEntryName"
        placeholder="Nom du cabinet"
        value={newEntryName}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="password"
        name="newEntryPin_code"
        placeholder="Code pin"
        value={newEntryPin_code}
        onChange={handleChange}
      />
      <div className="submit-update-tour" onClick={handleSubmit} >
        <span>Valider</span>
        <img className="submit-update-tour-img" src={check} alt="valider"/>
      </div>
      
    </form>
    </div>
  )
};

export default SubCabinetModal;
