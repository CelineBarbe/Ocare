// == Import npm
import React, {useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
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
  const dateDayLink = DateTime.local().toISODate();

  let dateMinusOne = DateTime.local().plus({ days: -1 });
  let dateMinusTwo = DateTime.local().plus({ days: -2 });

  let dateMinusOnePres = `${dateMinusOne.day} ${dateMinusOne.monthShort}`;
  let dateMinusTwoPres = `${dateMinusTwo.day} ${dateMinusTwo.monthShort}`;

  let dateMinusOneLink  =  dateMinusOne.toISODate();
  let dateMinusTwoLink = dateMinusTwo.toISODate();  

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
       <Link to={{
         pathname : `/transmission/${date.link}`,
         state: { date: date.link }
       }} key={date.link}>
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
