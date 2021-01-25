// == Import npm
import React from 'react';

// == Import
import './profilCard.scss';

//== Import images
import pen from 'src/assets/icones/pen.svg';

// == Composant
const ProfilCard = ({ changeField, lastname, firstname, email, phone_number, siren_code, avatar, logOut }) => {
  return (
    <div className="profil-card">
    <img src={pen} alt="stylo" className="profil-card-edit" />
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
