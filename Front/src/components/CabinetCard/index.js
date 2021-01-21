// == Import npm
import React from 'react';

// == Import
import './cabinetCard.scss';

//== Import images
import pen from 'src/assets/icones/pen.svg';

// == Composant
const CabinetCard = ({id, name, address, zip_code, city, phone_number}) => {
  return (
    <div className="cabinet-card">
    <img src={pen} alt="stylo" className="cabinet-card-edit" />
      <p className="cabinet-card-title">{name}</p>
      <span className="cabinet-card-nbpatient">55 Patients</span>
      <p className="cabinet-card-infos cabinet-card-adresse ">
        {address}
        {zip_code} {city}
      </p>
      <p className="cabinet-card-infos cabinet-card-phone">
        Téléphone : {phone_number}
      </p>
      <p className="cabinet-card-infos cabinet-card-mail">
        Mail : jerome@oclock.io
      </p>
    </div>
  )
};

// == Export
export default CabinetCard;
