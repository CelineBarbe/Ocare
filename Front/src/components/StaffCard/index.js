// == Import npm
import React, {useState} from 'react';

// == Import
import './staffCard.scss';

//== Import component 
import AddStaffModal from 'src/containers/AddStaffModal';

// == Import images
import avatar from 'src/assets/icones/avatar.svg'
import plus from 'src/assets/icones/plus2.svg';
import moins from 'src/assets/icones/moinsvert.svg';

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
    <div className="staff-card">
    { 
      addStaff
      ? <AddStaffModal closeModalAddStaff={closeModalAddStaff} />
      : null
    }
     {owner_id === idUser ? <img src={plus} alt="stylo" className="staff-card-add" onClick={openModalAddStaff} /> : null}
     <p className="staff-card-title">
       Notre équipe
     </p>

     <div className="nurse-card-container">

     {
      staff.length>1 
      ? staff.map(equipier => (
      <div className="nurse-card" key={equipier.id}>
          <img src={equipier.avatar} alt="nurse" className="nurse-card-img"/>
          <p className="nurse-card-infos nurse-card-name">
            {equipier.firstname} {equipier.lastname}
          </p>
          <p className="nurse-card-infos nurse-card-phone">
            Tél : <a href={`tel:+33${equipier.phone_number}`}>{equipier.phone_number}</a>
          </p>
          <p className="nurse-card-infos nurse-card-mail">
           <a href={`mailto:${equipier.email}`}>Envoyer un mail</a>
          </p>
          {owner_id === idUser ? <img src={moins} alt="moins" className="cabinets-card-add" onClick={ event => getEquipierId(equipier.id)} /> : null}
      </div>

     ))
     : <DefaultComponant/>
     }
      
     </div>
    </div>
  )
};

// == Export
export default StaffCard;
