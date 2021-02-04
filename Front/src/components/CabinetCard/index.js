// == Import npm
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

 // == Import
import './cabinetCard.scss';

//== Import images
import pen from 'src/assets/icones/pen.svg';

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
      <span className="cabinet-card-nbpatient"><Link to={`/patients`}>{nbpatients>=2 ? `${nbpatients} patients` : `${nbpatients} patient`} </Link></span>
      <p className="cabinet-card-infos cabinet-card-adresse ">
        {`${address} \n ${zip_code} ${city}`}
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
