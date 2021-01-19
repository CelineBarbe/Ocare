// == Import npm
import React from 'react';

// == Import
import './listcabinets.scss';

// == Import images
import plus from 'src/assets/icones/plus2.svg';
import cabinetIcone from 'src/assets/images/hospital.png';
// == Composant
const ListCabinets = () => {
  return (
    <div className="listcabinet-card">
     <img src={plus} alt="stylo" className="listcabinet-card-add" />
     <p className="listcabinet-card-title">
       Mes cabinets affiliés
     </p>
     <div className="nurse-card-container">
      <div className="nurse-card">
          <img src={cabinetIcone} alt="nurse" className="nurse-card-img"/>
          <p className="nurse-card-infos nurse-card-name">
            Cabinet Rubio
          </p>
      </div>

      
     </div>
    </div>
  )
};

// == Export
export default ListCabinets;
