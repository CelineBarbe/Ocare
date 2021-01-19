// == Import npm
import React from 'react';

// == Import
import './cabinetPage.scss';

//== Import components
import CabinetCard from 'src/components/CabinetCard';
import StaffCard from 'src/components/StaffCard';


// == Composant
const CabinetPage = () => {
  return (
    <div className="cabinet">
      <CabinetCard />
      <StaffCard />
    </div>
  )
};

// == Export
export default CabinetPage;
