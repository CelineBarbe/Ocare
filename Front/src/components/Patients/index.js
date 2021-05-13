// == Import npm
import React from 'react';

// == Import
import './patients.scss';

// == Impot images
import patient from 'src/assets/icones/patient2.svg'


// == Composant
const Patients = () => {
  return <div className="patients">
        <p className="patients-title">Patients</p>
        <img src={patient} alt="patients" className="patients-img"/>
  </div>
};

// == Export
export default Patients;
