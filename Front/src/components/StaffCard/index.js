// == Import npm
import React from 'react';

// == Import
import './staffCard.scss';

// == Import images
import avatar from 'src/assets/icones/avatar.svg'
import plus from 'src/assets/icones/plus2.svg';

// == Composant
const StaffCard = () => {
  return (
    <div className="staff-card">
     <img src={plus} alt="stylo" className="staff-card-add" />
     <p className="staff-card-title">
       Notre équipe
     </p>
     <div className="nurse-card-container">
      <div className="nurse-card">
          <img src={avatar} alt="nurse" className="nurse-card-img"/>
          <p className="nurse-card-infos nurse-card-name">
            Jérôme baillet
          </p>
          <p className="nurse-card-infos nurse-card-phone">
            Tél : 03.21.22.23.24
          </p>
          <p className="nurse-card-infos nurse-card-mail">
            Mail : jerome@oclock.io
          </p>
      </div>

      <div className="nurse-card">
          <img src={avatar} alt="nurse" className="nurse-card-img" />
          <p className="nurse-card-infos nurse-card-name">
            Marlène Rubio
          </p>
          <p className="nurse-card-infos nurse-card-phone">
            Tél : 03.98.45.76.13
          </p>
          <p className="nurse-card-infos nurse-card-mail">
            Mail : marlene@oclock.io
          </p>
      </div>

      <div className="nurse-card">
          <img src={avatar} alt="nurse" className="nurse-card-img" />
          <p className="nurse-card-infos nurse-card-name">
            Marlène Rubio
          </p>
          <p className="nurse-card-infos nurse-card-phone">
            Tél : 03.98.45.76.13
          </p>
          <p className="nurse-card-infos nurse-card-mail">
            Mail : marlene@oclock.io
          </p>
      </div>
     </div>
    </div>
  )
};

// == Export
export default StaffCard;
