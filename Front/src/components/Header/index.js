// == Import npm
import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
// == Import
import './header.scss';
import logo from 'src/assets/images/logo.svg';
import triangle from 'src/assets/icones/header_triangle.svg';

import Notification from 'src/containers/Notification';

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
    
    <ul className="header-ul">

      <li className="header-home">
        <Link to="/dashboard">
          <img src={logo} alt="logo" className="header-img-logo" />
        </Link>
      </li>
    
      <li className="header-title">
        <select className="header-title-cabinet" onChange={handleChange}>
         <option value={default_cabinet}>{name}</option>
          {!isLoading ? listCabinets.filter(cab => cab.id !== ~~default_cabinet).map(cabinet => (
            <option key={cabinet.id} value={cabinet.id}>{cabinet.name}</option>
          )
          ) : 'data loading...'}
        </select>
      </li>

      <li className="header-profil">
        <Link to="/profil">
          <img src={avatar} alt="avatar" className="header-img-avatar" />
        </Link>
      </li>
    </ul>
    <Notification />
  </header>
  )
}

// == Export
export default Header;
