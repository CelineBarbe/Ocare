// == Import npm
import React, {useEffect, Fragment } from 'react';

// == Import
import './cabinetPage.scss';

//== Import components
import CabinetCard from 'src/containers/CabinetCard';
import StaffCard from 'src/containers/StaffCard';
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';



// == Composant
const CabinetPage = ({handleRefresh}) => {
useEffect(() => {
  handleRefresh()
}, [])

  return (
    <Fragment>
      <Header />
      <div className="main">
        <div className="cabinetPage-container">
        <CabinetCard />
        <StaffCard />
        </div>
      </div>
      <Nav />
    </Fragment>
  )
};

// == Export
export default CabinetPage;
