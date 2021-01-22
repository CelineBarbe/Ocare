// == Import npm
import React, { Fragment } from 'react';

// == Import
import './profil.scss';

//== Import components
import ProfilCard from 'src/containers/ProfilCard';
import ListCabinets from 'src/containers/ListCabinets';
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';


// == Composant
const ProfilPage= () => {
  return (
    <Fragment>
      <Header />
      <div className="main">
        <ProfilCard />
        <ListCabinets />
      </div>
      <Nav />
    </Fragment>
  )
};

// == Export
export default ProfilPage;
