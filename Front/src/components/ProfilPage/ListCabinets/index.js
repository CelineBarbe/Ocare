// == Import npm
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// == Import
import './listcabinets.scss';

// == Import images
import plus from 'src/assets/icones/plus2.svg';
import cabinetIcone from 'src/assets/images/hospital.png';
// == Composant
const ListCabinets = ({list, changeCabinet}) => {
  
  //REDIRECTION dashboard
   const history = useHistory();
   const routeDashboard = () =>{ 
     let path = `/Dashboard`; 
     history.push(path);
   }

  const handleClick= (_,id) => {
    changeCabinet(id);
    routeDashboard();
  }
  return (
    <div className="listcabinet-card">
     <img src={plus} alt="stylo" className="listcabinet-card-add" />
     <p className="listcabinet-card-title">
       Mes cabinets affiliés
     </p>
     <div className="hospital-card-container">
     {list.map(cabinet => (
        <div className="hospital-card" key={cabinet.id} onClick={(e) => handleClick(e, cabinet.id)}>
           <img src={cabinetIcone} alt="nurse" className="hospital-card-img"/>
          <p className="hospital-card-infos hospital-card-name">
            {cabinet.name}
          </p>
    </div>
     ))}
     </div>
    </div>
  )
};

// == Export
export default ListCabinets;
