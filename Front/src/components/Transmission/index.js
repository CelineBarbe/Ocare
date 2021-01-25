// == Import npm
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
// == Import images
var { DateTime } = require('luxon');

import notes from 'src/assets/icones/notes.svg';

// == Import components
import './transmission.scss';

// == Composant
const Transmission = () => {
  let arrayDate = [];
  useEffect(() => {
    
}, [])

const seedDate = () => {
  const dateDayPres = `${DateTime.local().day} ${DateTime.local().monthShort}`;
  const dateDayLink = DateTime.local().toLocaleString();

  let dateMinusOne = DateTime.local().plus({ days: -1 });
  let dateMinusTwo = DateTime.local().plus({ days: -2 });

  let dateMinusOnePres = `${dateMinusOne.day} ${dateMinusOne.monthShort}`;
  let dateMinusTwoPres = `${dateMinusTwo.day} ${dateMinusTwo.monthShort}`;
  //DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
  let dateMinusOneLink  =  dateMinusOne.toLocaleString();
  let dateMinusTwoLink = dateMinusTwo.toLocaleString();  

  arrayDate.push({pres : dateMinusTwoPres, link : dateMinusTwoLink}, {pres : dateMinusOnePres, link : dateMinusOneLink}, {pres : dateDayPres, link : dateDayLink});
  console.log(arrayDate);
}
seedDate()
  return (
    <div className="transmission">
    <Link to="/transmission">
      <h1 className="transmission-h1">Transmissions</h1>
    </Link>
    <ul className="transmission-ul">
    {arrayDate.length>1 ? arrayDate.map(date => (
       <Link to={`/transmission/${date.link}`} key={date.link}>
        <li className="transmission-li">
          <img className="transmission-img" src={notes} alt="notes" />
          <span className="transmission-date">{date.pres}</span>
        </li>
      </Link>

    )): 'charge!'}
     
     {/*  <li className="transmission-li">
        <img className="transmission-img" src={notes} alt="notes" />
        <span className="transmission-date">19/01</span>
      </li>

      <li className="transmission-li">
        <img className="transmission-img" src={notes} alt="notes" />
        <span className="transmission-date">20/01</span>
      </li> */}
    </ul>

  </div>
  )
}


// == Export
export default Transmission;
