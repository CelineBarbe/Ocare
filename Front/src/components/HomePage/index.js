// == Import npm
import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

// == Import
import './homePage.scss';

// == Composant
const HomePage = ({isLogged, autoLogin}) => {
  //REDIRECTION dashboard
  const history = useHistory();
  const routeDashboard = () =>{ 
    let path = `/Dashboard`; 
    history.push(path);
  }
  useEffect(()=> {autoLogin()}, [])
  useEffect(() => { isLogged ? routeDashboard() : null}, [isLogged])

  return (
    <div className="homepage">
    <h1 className="homepage-title">OCARE</h1>
    <p className="homepage-content">Les infirmiers libéraux doivent s’occuper de patients 365 jours par an, pour cela ils sont obligés de travailler en équipe, regroupés au sein d’un cabinet. Le cabinet est composé au minimum de deux infirmiers.
      Le nombre de patients au sein d’un cabinet est important, les journées sont très chargées et les infirmiers manquent de temps pour bien s'organiser, pour bien communiquer.
      Ils passent beaucoup de temps après leurs tournées pour transmettre des informations à l’équipe, on appelle ça les transmissions. Elles sont souvent faites le soir par téléphone.
      Partant de ce constat nous avons eu l’idée de développer une application qui a pour but d’améliorer la communication du cabinet.
    </p>
    <Link to="/login"><button className="homepage-button">Se connecter</button></Link>
    <Link to="/signup"><button className="homepage-button">Inscription</button></Link>
  </div>
  )
}

// == Export
export default HomePage;
