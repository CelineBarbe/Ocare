// == Import npm
import React, {useState} from 'react';

// == Import
import './staffCard.scss';

//== Import component 
import AddStaffModal from 'src/containers/AddStaffModal';

// == Import images
import plus from 'src/assets/icones/plus_blanc.svg';
import trash from 'src/assets/icones/trash.svg';
import phone from 'src/assets/icones/phone.svg';
import mail from 'src/assets/icones/mail.svg';

// == Composant
const StaffCard = ({
  staff,
  handleunSubNurse,
  owner_id,
  idUser,
}) => {
  
  /*hook pour modal */
  const [addStaff,setAddStaff] = useState(false);
  /* Fonction d'ouverture fermeture AddStaff */
  function openModalAddStaff() {
    setAddStaff(true);
  }

  function closeModalAddStaff(){
    setAddStaff(false);
  }

  const getEquipierId = (params) => {
    handleunSubNurse(params);
  } 

  /*composant défaut lorsqu'il n'y a pas d'équipier dans le cabinet'*/
  const DefaultComponant = () => {
    return (
      <h1 className="default-title">Aucun infirmier dans votre cabinet</h1>
    )
  } 

  return (
    <>
    <div className="staff-card">
    { 
      addStaff
      ? <AddStaffModal closeModalAddStaff={closeModalAddStaff} />
      : null
    }
     
     <p className="staff-card-title">
       Notre équipe
     </p>

     <div className="nurse-card-container">
     {
      staff.length>1 
      ? staff.map(equipier => (
      <div className="nurse-card" key={equipier.id}>
        <img src={equipier.avatar} alt="nurse" className="nurse-card-img"/>
        <p className="nurse-card-name">{equipier.firstname}</p>
        <p className="nurse-card-name">{equipier.lastname}</p>

        <div className="nurse-card-contact"> 
          <a href={`tel:+33${equipier.phone_number}`}>
            <img src={phone}  alt="phone" className="nurse-card-contact-img"/>
          </a>
          <a href={`mailto:${equipier.email}`}>
            <img src={mail}  alt="mail" className="nurse-card-contact-img"/>
           </a> 
        </div>
        {owner_id === idUser ? <img src={trash} alt="moins" className="nurse-card-remove" onClick={ event => getEquipierId(equipier.id)} /> : null}
      </div>
     ))
     : <DefaultComponant/>
     }
      
     </div>
    </div>
    { owner_id === idUser 
    ? <div className="button-create-cabinet" onClick={openModalAddStaff} >
        <span className="button-create-cabinet-title">Inviter un infirmier</span>
        <img src={plus} alt="croix" className="button-create-cabinet-add"/>
      </div>
    : null
    }
     </>
  )
};

// == Export
export default StaffCard;
