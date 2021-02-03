import React, {useState} from 'react';
import { storage } from 'src/Firebase';

// == Import
import './editProfilModal.scss';

import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/check.svg';


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


/* */



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
    <div className="modal-sub-cabinet">
      <img src={close} alt="stylo" className="modal-sub-cabinet-close" onClick={closeModalEditProfil}/>
      <p className="modal-sub-cabinet-title">
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

      <input type="file" id="profile_pic" name="profile_pic"
          accept="image/*, .jpg, .jpeg, .png"  onChange={handleChangeFile}/>
      <button onClick={handleUpload} type='button'>Upload</button>
      <img className="modal-patient-avatar" src={urlImage} />
      <img className="modal-patient-update-img" src={check} alt="valider" onClick={handleSubmit}/>
    </form>
    </div>
  )
};

export default EditProfilModal;
