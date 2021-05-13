// == Import npm
import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
// == Import
import './header.scss';

import Notification from 'src/containers/Notification';

import arrow_right from 'src/assets/icones/arrow_right.svg';

//import {sortCabinets} from 'src/utils/searchAndReturn'

// == Composant
const Header = ({avatar, listCabinets, default_cabinet, name, changeCabinet, isLoading}) => {
  
  //REDIRECTION dashboard
   const history = useHistory();
   const routeDashboard = () =>{ 
     let path = `/Dashboard`; 
     history.push(path);
   }

  const handleChange = (event) => {
   changeCabinet(event.target.value);
   routeDashboard();
 }
  
  return(
    <header className="header">
      <Link to="/profil">
        <img src={avatar} alt="avatar" className="header-img-avatar header-profil" />
      </Link>
      <div className="header-title">
        <select className="header-title-cabinet " onChange={handleChange}>
         <option value={default_cabinet}>{name} {'>'}</option>
          {!isLoading ? listCabinets.filter(cab => cab.id !== ~~default_cabinet).map(cabinet => (
            <option key={cabinet.id} value={cabinet.id}>{cabinet.name}</option>
          )
          ) : 'data loading...'}
        </select>
      </div>
    <Notification />
  </header>
  )
}

// == Export
export default Header;
