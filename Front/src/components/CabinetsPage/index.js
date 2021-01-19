// == Import npm
import React from 'react';

// == Import
import './cabinetsPage.scss';

//== Import components
import CabinetCard from 'src/components/CabinetCard';
import StaffCard from 'src/components/StaffCard';

// == Import images
import hospital from 'src/assets/icones/hospital.svg';
import plus from 'src/assets/icones/plus2.svg';
import moins from 'src/assets/icones/moinsvert.svg';


// == Composant
const CabinetsPage = () => {
  return (
    <div className="cabinets">
      <h1 className="cabinets-title"> Gestion des cabinets </h1>
        <img src={plus} alt="croix" className="cabinets-add" />
      
      <div className="cabinets-container">
      
        <div className="cabinets-card">
          <img src={hospital} alt="cabinet" className="cabinets-card-img" />
          <p className="cabinets-card-infos cabinets-card-name">Cabinet Rubio</p>
          <span className="cabinets-card-infos cabinets-card-nbpatient">55 Patients</span>
          <img src={moins} alt="moins" className="cabinets-card-add" />
        </div>

        <div className="cabinets-card">
          
          <img src={hospital} alt="cabinet" className="cabinets-card-img" />
          <p className="cabinets-card-infos cabinets-card-name">Cabinet Baillet</p>
          <span className="cabinets-card-infos cabinets-card-nbpatient">12 Patients</span>
          <img src={moins} alt="moins" className="cabinets-card-add" />
        </div>

        <div className="cabinets-card">
          
          <img src={hospital} alt="cabinet" className="cabinets-card-img" />
          <p className="cabinets-card-infos cabinets-card-name">Cabinet Przybylski</p>
          <span className="cabinets-card-infos cabinets-card-nbpatient">24 Patients</span>
          <img src={moins} alt="moins" className="cabinets-card-add" />
        </div>

        <div className="cabinets-card">
          
          <img src={hospital} alt="cabinet" className="cabinets-card-img" />
          <p className="cabinets-card-infos cabinets-card-name">Cabinet Durand</p>
          <span className="cabinets-card-infos cabinets-card-nbpatient">33 Patients</span>
          <img src={moins} alt="moins" className="cabinets-card-add" />
        </div>
      </div>
    </div>
  )
};

// == Export
export default CabinetsPage;
