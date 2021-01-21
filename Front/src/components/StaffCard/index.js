// == Import npm
import React from 'react';

// == Import
import './staffCard.scss';

// == Import images
import avatar from 'src/assets/icones/avatar.svg'
import plus from 'src/assets/icones/plus2.svg';

// == Composant
const StaffCard = ({staff}) => {
  return (
    <div className="staff-card">
     <img src={plus} alt="stylo" className="staff-card-add" />
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
      </div>

     ))}
      
     </div>
    </div>
  )
};

// == Export
export default StaffCard;
