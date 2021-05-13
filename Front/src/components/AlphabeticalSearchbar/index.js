// == Import npm
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// == Import
import './alphabeticalSearchbar.scss';

import { alphabetic } from 'src/utils/searchAndReturn';


// == Composant
const AlphabeticalSearchbar = () => {

  return <div className="alphabetical-searchbar">
    <ul className="alphabetical-searchbar-ul">
    {alphabetic.map(letter => (<li className="alphabetical-searchbar-li" key={letter}><Link smooth to={`/patients#${letter}`}>{letter}</Link></li>))}
    </ul>
  </div>
};

// == Export
export default AlphabeticalSearchbar;
 