// == Import npm
import React from 'react';

// == Import images

import notes from 'src/assets/icones/notes.svg'

// == Import components
import './transmission.scss';


// == Composant
const Transmission = () => {
  return <div className="transmission">
    <h1 className="transmission-h1">Transmissions</h1>
     <ul className="transmission-ul">
       <li className="transmission-li">
         <img className="transmission-img" src={notes} alt="notes" />
         <span className="transmission-date">18/01</span>
       </li>

       <li className="transmission-li">
         <img className="transmission-img" src={notes} alt="notes" />
         <span className="transmission-date">19/01</span>
       </li>

       <li className="transmission-li">
         <img className="transmission-img" src={notes} alt="notes" />
         <span className="transmission-date">20/01</span>
       </li>
     </ul>

  </div>
};

// == Export
export default Transmission;
