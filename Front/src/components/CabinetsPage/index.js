// == Import npm
import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';

// == Import
import './cabinetsPage.scss';

//== Import components

import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import CreateCabinetModal from 'src/containers/CreateCabinetModal';


import plus from 'src/assets/icones/plus2.svg';
import moins from 'src/assets/icones/moinsvert.svg';


// == Composant
const CabinetsPage = ({ listCabinets, handleunSubCabinet, handleRefresh, changeCabinet, idUser}) => {
//REDIRECTION dashboard
const history = useHistory();
const routeDashboard = () =>{ 
  let path = `/Dashboard`; 
  history.push(path);
}
/* useEffect(() => {
  console.log("refresh listCabinets dans cabinetsPage et envoi dashboard init")
  handleRefresh()
}, [listCabinets]) */

const getCabinetId = (params) => {
  handleunSubCabinet(params);
  //refresh dashboard init sans redirect pour test à voir
  //handleRefresh();
} 

/*hook pour modal */
const [createCabinet,setCreateCabinet] = useState(false);
/* Fonction d'ouverture fermeture editProfil */
function openModalCreateCabinet() {
  setCreateCabinet(true);
}

function closeModalCreateCabinet(){
  setCreateCabinet(false);
}

const handleClick= (_,id) => {
  changeCabinet(id);
  routeDashboard();
}

  return (

        <Fragment>
        <Header />
        <div className="main">
      
            <div className="title-container">
              <h1 className="cabinets-title"> Gestion des cabinets </h1>
              <img src={plus} alt="croix" className="cabinets-add" onClick={openModalCreateCabinet} />
            </div>
        
        
          <div className="cabinets-container">
          {
            createCabinet 
            ? <CreateCabinetModal closeModalCreateCabinet={closeModalCreateCabinet} />
            : null
          }
          
          {listCabinets.map((cabinet,index) => (
                <div className="cabinets-card" key={cabinet.id} id={cabinet.id}>
                  <div id={`hospital${index}`} alt="cabinet" className="cabinets-card-img" onClick={(e) => handleClick(e, cabinet.id)}></div>
                  <p className="cabinets-card-name cabinets-card-style">{cabinet.name}</p>
                  <span className="cabinets-card-name cabinets-card-nbpatient">{cabinet.nbpatients} patients</span>

                  {idUser !== cabinet.owner_id ? <img src={moins} alt="moins" className="cabinets-card-add" onClick={ event => getCabinetId(cabinet.id)} /> : null}
                </div>
          ))}
          </div>
        </div>
        <Nav />
        </Fragment>
  )
};

// == Export
export default CabinetsPage;
