// == Import npm
import React, { Fragment } from 'react';

// == Import
import './cabinetPage.scss';

//== Import components
import CabinetCard from 'src/containers/CabinetCard';
import StaffCard from 'src/containers/StaffCard';
import Header from 'src/containers/Header';
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
