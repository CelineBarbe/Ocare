import React, {useState} from 'react';
import { storage } from 'src/Firebase';

// == Import
import './editProfilModal.scss';

import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/checkWhite.svg';
import checkRose from 'src/assets/icones/check.svg';


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
  openModalNotification,
}) => {
/*FIREBASE STUFF */
const [image, setImage] = useState(null);
//avatar par défaut
const [urlImage, setUrlImage] = useState(avatar)
    const handleChangeFile = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error =>{
                console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then (url => {
                    console.log(url);
                    setUrlImage(url);
                })
            }
        )
    };

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateProfil(id, urlImage);
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
        name="avatar"
        placeholder="Avatar"
        value={urlImage}
        onChange={handleChange}
      />

      <label className="file-label" htmlFor="profile_pic">Choisir une photo</label>
      {image ?
      <span className="file-label-name">{image.name}</span>
      : null
      }
      <input hidden type="file" id="profile_pic" name="profile_pic"
          accept="image/*, .jpg, .jpeg, .png"  onChange={handleChangeFile}/>

      <img className="modal-patient-avatar" src={urlImage} />
      <img src={checkRose} onClick={handleUpload} className="modal-patient-avatar-upload"/>

      <div className="formulaire-button" onClick={handleSubmit} >
        <span className="formulaire-button-title">Valider</span>
        <img className="formulaire-button-img" src={check} alt="valider"/>
      </div>
    </form>
    </div>
  )
};

export default EditProfilModal;
