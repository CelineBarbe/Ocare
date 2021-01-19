// == Import npm
import React, { Fragment } from 'react';

// == Import
import './profil.scss';

//== Import components
import ProfilCard from 'src/containers/ProfilCard';
import ListCabinets from './ListCabinets';
import Header from 'src/components/Header';
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
