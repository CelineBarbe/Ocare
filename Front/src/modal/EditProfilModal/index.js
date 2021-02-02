import React from 'react';

// == Import
import './editProfilModal.scss';

import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/checkWhite.svg';


const EditProfilModal = ({ 
  closeModalEditProfil,
  changeField,
  handleUpdateProfil,
  id,
  avatar,
  email, 
  firstname, 
  lastname, 
  phone_number, 
  siren_code,
  openModalNotification
}) => {

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateProfil(id);
    closeModalEditProfil();
    openModalNotification(true);
  };

  return (
    <div className="modal-edit-profil">
      <img src={close} alt="stylo" className="modal-edit-profil-close" onClick={closeModalEditProfil}/>
      <p className="modal-edit-profil-title">
       Editer votre profil 
      </p>
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
        <input
        className="form-input"
        type="text"
        name="avatar"
        placeholder="Avatar"
        value={avatar}
        onChange={handleChange}
      />
      <div className="submit-update" onClick={handleSubmit}>
          <span className="modal-patient-update-img-title">Valider</span>
          <img className="modal-patient-update-img" src={check} alt="valider"/>
      </div>
    </form>
    </div>
  )
};

export default EditProfilModal;
