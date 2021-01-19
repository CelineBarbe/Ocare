// == Import npm
import React from 'react';

// == Import
import './profilCard.scss';

//== Import images
import pen from 'src/assets/icones/pen.svg';

// == Composant
const ProfilCard = () => {
  return (
    <div className="cabinet-card">
    <img src={pen} alt="stylo" className="cabinet-card-edit" />
      <p className="cabinet-card-title">Cabinet Rubio</p>
      <span className="cabinet-card-nbpatient">55 Patients</span>
      <p className="cabinet-card-infos cabinet-card-adresse ">
        10 Rue de Penthievre
        75008 Paris
      </p>
      <p className="cabinet-card-infos cabinet-card-phone">
        Téléphone : 06.48.20.12.93
      </p>
      <p className="cabinet-card-infos cabinet-card-mail">
        Mail : jerome@oclock.io
      </p>
    </div>
  )
};

// == Export
export default ProfilCard;
