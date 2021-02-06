// == Import npm
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

// == Import
import './profilCard.scss';

//== Import component 
import EditProfilModal from 'src/containers/EditProfilModal';

//== Import images
import pen from 'src/assets/icones/pen.svg';
import phone from 'src/assets/icones/phone.svg';
import mail from 'src/assets/icones/mail.svg';
import logout from 'src/assets/icones/logout.svg';

// == Composant
const ProfilCard = ({ 
  changeField,
  lastname, 
  firstname, 
  email, 
  phone_number, 
  siren_code, 
  avatar, 
  logOut,
 }) => {
  //REDIRECTION HomePage
  const history = useHistory();
  const routeHomePage = () =>{ 
    let path = `/`; 
    history.push(path);
  }


  /*hook pour modal */
  const [editProfil,setEditProfil] = useState(false);
  /* Fonction d'ouverture fermeture editProfil */
  function openModalEditProfil() {
    setEditProfil(true);
  }

  function closeModalEditProfil(){
    setEditProfil(false);
  }

  const handleLogOut = () => {
    logOut();
    routeHomePage();
  }

  return (
    <div className="profil-card">
    { 
      editProfil
      ? <EditProfilModal closeModalEditProfil={closeModalEditProfil} />
      : null
    }
    <img src={pen} alt="stylo" className="profil-card-edit" onClick={openModalEditProfil} />

    <p className="profil-card-title">{`${firstname} ${lastname}`}</p>
    <div className="container-cabinet-infos">
      <img src={phone}  alt="homme" className="container-cabinet-infos-img"/>
      <p className="container-cabinet-infos-title">{phone_number}</p>
    </div>
    <div className="container-cabinet-infos">
      <img src={mail}  alt="homme" className="container-cabinet-infos-img"/>
      <p className="container-cabinet-infos-title">{email}</p>
    </div>
    <div className="button-logout" onClick={handleLogOut} >
      {/*<span className="button-logout-title">Déconnexion</span> */} 
      <img src={logout} alt="croix" className="button-logout-img"/>
    </div>
    </div>
  )
};

// == Export
export default ProfilCard;
