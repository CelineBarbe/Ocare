// == Import npm
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// == Import
import './listcabinets.scss';

// == Import images
import plus from 'src/assets/icones/plus_blanc.svg';
import cabinetIcone from 'src/assets/images/hospital3.svg';

//== Import Component 
import SubCabinetModal from 'src/containers/SubCabinetModal';


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

/* Hook gestion modal */
const [subCabinetModal,setOpenSubCabinetModal] = useState(false);

/* Fonction d'ouverture fermeture updatemodal */
function openModalSubCabinet() {
  setOpenSubCabinetModal(true);
}

function closeModalSubCabinet(){
  setOpenSubCabinetModal(false);
}

  return (
    <>
    <p className="listcabinet-title">Mes cabinets affiliés</p>
    <div className="listcabinet-card">
    { 
      subCabinetModal
      ? <SubCabinetModal closeModalSubCabinet={closeModalSubCabinet} />
      : null
    }
     {list.map(cabinet => (
        <div className="hospital-card" key={cabinet.id} onClick={(e) => handleClick(e, cabinet.id)}>
           <img src={cabinetIcone} alt="nurse" className="hospital-card-img"/>
          <p className="hospital-card-infos hospital-card-name">
            {cabinet.name}
          </p>
    </div>
     ))}
    </div>
    <div className="button-create-cabinet" onClick={openModalSubCabinet} >
      <span className="button-create-cabinet-title">Souscrire à un cabinet</span>
      <img src={plus} alt="croix" className="button-create-cabinet-add"/>
    </div>

    </>
  )
};

// == Export
export default ListCabinets;
