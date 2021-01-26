// == Import npm
import React, { useState } from 'react';

// == Import
import './profilCard.scss';

//== Import component 
import EditProfilModal from 'src/containers/EditProfilModal';

//== Import images
import pen from 'src/assets/icones/pen.svg';

// == Composant
const ProfilCard = ({ changeField, lastname, firstname, email, phone_number, siren_code, avatar, logOut }) => {

  /*hook pour modal */
  const [editProfil,setEditProfil] = useState(false);
  /* Fonction d'ouverture fermeture editProfil */
  function openModalEditProfil() {
    setEditProfil(true);
  }

  function closeModalEditProfil(){
    setEditProfil(false);
  }

  return (
    <div className="profil-card">
    { 
      editProfil
      ? <EditProfilModal closeModalEditProfil={closeModalEditProfil} />
      : null
    }
    <img src={pen} alt="stylo" className="profil-card-edit" onClick={openModalEditProfil} />
      <p className="profil-card-nom">{`${firstname} ${lastname}`}</p>
      <span className="profil-card-siren_code">{siren_code}</span>
      <p className="profil-card-infos cabinet-card-adresse ">
      Avatar: </p><img src={avatar} alt="avatar" className="profil-card-img"></img>
      
      <p className="profil-card-infos">
        Téléphone : {phone_number}
      </p>
      <p className="profil-card-infos">
        Mail : {email}
      </p>
      <button type="Button" className="profil-card-button" onClick={logOut}> Se Déconnecter </button>
    </div>
  )
};

// == Export
export default ProfilCard;
