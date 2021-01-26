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
  handleunSubNurse
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

  return (
    <div className="staff-card">
    { 
      addStaff
      ? <AddStaffModal closeModalAddStaff={closeModalAddStaff} />
      : null
    }
     <img src={plus} alt="stylo" className="staff-card-add" onClick={openModalAddStaff} />
     <p className="staff-card-title">
       Notre équipe
     </p>

     <div className="nurse-card-container">

     {staff.map(equipier => (
      <div className="nurse-card" key={equipier.id}>
          <img src={equipier.avatar} alt="nurse" className="nurse-card-img"/>
          <p className="nurse-card-infos nurse-card-name">
            {equipier.firstname} {equipier.lastname}
          </p>
          <p className="nurse-card-infos nurse-card-phone">
            Tél : {equipier.phone_number}
          </p>
          <p className="nurse-card-infos nurse-card-mail">
            Mail : jerome@oclock.io
          </p>
          <img src={moins} alt="moins" className="cabinets-card-add" onClick={ event => getEquipierId(equipier.id)} />
      </div>

     ))}
      
     </div>
    </div>
  )
};

// == Export
export default StaffCard;
