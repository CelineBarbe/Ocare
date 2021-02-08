// == Import npm
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

 // == Import
import './cabinetCard.scss';

//== Import images
import pen from 'src/assets/icones/pen.svg';
import nbPatients from 'src/assets/icones/patients_rose.svg';
import adresse from 'src/assets/icones/map.svg';
import phone from 'src/assets/icones/phone.svg';
import mail from 'src/assets/icones/mail.svg';

import UpdateCabinetModal from 'src/containers/UpdateCabinetModal';


// == Composant
const CabinetCard = ({id, name, address, email, zip_code, pin_code, city, phone_number, nbpatients, owner_id, idUser
  
}) => {
  
  const [entryModal,setEntryModal] = useState(false);

  const handleModal = () => {
    if (entryModal) {
      setEntryModal(false);
    } else {
      setEntryModal(true);
    }
  }
   
  return (
    <div className="cabinet-card">
    {owner_id === idUser ? <img src={pen} alt="stylo" className="cabinet-card-edit" onClick={handleModal}/> : null}
    {entryModal ? 
    <UpdateCabinetModal handleModal={handleModal} />
    : null}
      <p className="cabinet-card-title">{name}</p>

      <div className="container-cabinet-infos">
        <img src={nbPatients} alt="homme" className="container-cabinet-infos-img"/>
        <p className="container-cabinet-infos-title">{nbpatients} patients</p>
      </div>
      
      <div className="container-cabinet-infos">
        <img src={adresse}  alt="homme" className="container-cabinet-infos-img"/>
        <p className="container-cabinet-infos-title">{`${address} \n ${zip_code} ${city}`}</p>
      </div>
      <div className="container-cabinet-infos">
        <img src={phone}  alt="homme" className="container-cabinet-infos-img"/>
        <p className="container-cabinet-infos-title">{phone_number}</p>
      </div>
      <div className="container-cabinet-infos">
        <img src={mail}  alt="homme" className="container-cabinet-infos-img"/>
        <p className="container-cabinet-infos-title">{email}</p>
      </div>

    </div>
  )
};

// == Export
export default CabinetCard;
