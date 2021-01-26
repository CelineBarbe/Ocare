import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// == Import
import './SubCabinetModal.scss';

import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';


const SubCabinetModal = ({ 
  closeModalSubCabinet, 
  name, 
  pin_code, 
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
      let path = `/Dashboard`; 
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
        name="name"
        placeholder="Nom du cabinet"
        value={name}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="password"
        name="pin_code"
        placeholder="Code pin"
        value={pin_code}
        onChange={handleChange}
      />
      <img className="modal-patient-update-img" src={check} alt="valider" onClick={handleSubmit}/>
    </form>
    </div>
  )
};

export default SubCabinetModal;
