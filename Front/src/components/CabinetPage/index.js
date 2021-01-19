// == Import npm
import React, { Fragment } from 'react';

// == Import
import './cabinetPage.scss';

//== Import components
import CabinetCard from 'src/components/CabinetCard';
import StaffCard from 'src/components/StaffCard';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';


// == Composant
const CabinetPage = () => {
  return (
    <Fragment>
      <Header />
      <div className="main">
        <CabinetCard />
        <StaffCard />
      </div>
      <Nav />
    </Fragment>
  )
};

// == Export
export default CabinetPage;
