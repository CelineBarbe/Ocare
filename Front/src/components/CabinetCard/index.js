// == Import npm
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

 // == Import
import './cabinetCard.scss';

//== Import images
import pen from 'src/assets/icones/pen.svg';

import UpdateCabinetModal from 'src/modal/UpdateCabinetModal'


// == Composant
const CabinetCard = ({id, name, address, email, zip_code, pin_code, city, phone_number, nbpatients, 
  newEntryMail,changeFieldUpdate,handleSubmitUpdate
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
    <img src={pen} alt="stylo" className="cabinet-card-edit" onClick={handleModal}/>
    {entryModal ? 
    <UpdateCabinetModal
      id={id}
      name={name}
      address={address}
      zip_code={zip_code}
      city={city}
      phone_number={phone_number}
      newEntryMail={newEntryMail}
      pin_code={pin_code}
      handleSubmitUpdate={handleSubmitUpdate}
      handleModal={handleModal}
      changeFieldUpdate={changeFieldUpdate}
      
    />
    
    : null}
      <p className="cabinet-card-title">{name}</p>
      <span className="cabinet-card-nbpatient">{nbpatients} patients</span>
      <p className="cabinet-card-infos cabinet-card-adresse ">
        {address}
        {zip_code} {city}
      </p>
      <p className="cabinet-card-infos cabinet-card-phone">
        Téléphone : {phone_number}
      </p>
      <p className="cabinet-card-infos cabinet-card-mail">
        Mail : {email}
      </p>

    </div>
  )
};

// == Export
export default CabinetCard;
