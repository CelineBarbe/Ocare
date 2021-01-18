// == Import npm
import React from 'react';

// == Import
import './main.scss';

// == Import components
import Searchbar from 'src/components/Searchbar';


// == Composant
const Main = () => {
  return <main className="main">
        <Searchbar />
  </main>
};

// == Export
export default Main;
