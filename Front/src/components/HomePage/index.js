// == Import npm
import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

// == Import
import './homePage.scss';

// Imports avatars
import lindsay from 'src/assets/images/Lindsay.png';
import jerome from 'src/assets/images/Jerome.png';
import stephane from 'src/assets/images/Stephane.png';
import celine from 'src/assets/images/Celine.png';
import nicolas from 'src/assets/images/Nicolas.png';
import logoVertTop from 'src/components/HomePage/coin_vert_haut.svg';
import logoRoseTop from 'src/components/HomePage/coin_rose_haut.svg';
import logoVertBot from 'src/components/HomePage/coin_vert.svg';
import logoRoseBot from 'src/components/HomePage/coin_rose.svg';
import mail from 'src/assets/icones/mail.svg';
import github from 'src/assets/icones/git.svg';
import linkedin from 'src/assets/icones/linkedin.svg';

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
    <Link to="/login"><button className="homepage-button">Nous rejoindre</button></Link>
    <div className="homepage-header">
      <div className="container-top visuel">
        <div className="logo-container">
          <img src={logoVertTop} className="top-left logo" alt="logo"/>
          <img src={logoRoseTop} className="top-right logo" alt="logo"/>
          <img src={logoVertBot} className="bot-left logo" alt="logo"/>
          <img src={logoRoseBot} className="bot-right logo" alt="logo"/>
        </div>
      
        <h1 className="login-container-title">care</h1>
      </div>
    
    </div>
    
  
    <div className="homepage-presentation">
    <h2 className="homepage-title">Présentation de l'application</h2>

    <p className="homepage-content">O'Care est une application web à destination des soignants indépendants ayant pour vocation de faciliter, de fluidifier et d'améliorer la communication des transmissions au sein de l'équipe soignante, dans le but d'assurer la bonne continuité des soins aux patients.</p>

   <p className="homepage-content">Une fois connecté à votre cabinet référent vous pourrez disposer des informations des patients de ce cabinet, les mettre à jour, insérer des photos pour garder une trace et assurer un meilleur suivi.</p>

   <p className="homepage-content">La communication avec les autres membres de votre cabinet s’effectue par des panneaux que nous avons nommés “transmissions” et qui regroupent les différentes observations laissées par vous où vos collègues dans les observations du dossier patient. Vous pourrez aussi les contacter directement par mail ou téléphone, leurs informations étant résumées dans la page détails du cabinet.</p>

   <p className="homepage-content">Vous pouvez travailler sur plusieurs cabinets et switcher de l’un à l’autre très facilement.</p>

   <p className="homepage-content">Chaque jour la tournée du cabinet est affichée sur votre dashboard, elle reprend les patients qui doivent être vus ce jour ainsi que les soins devant leur être effectués.</p>

   <p className="homepage-content">Vous pourrez apporter des modifications d’ordre et ou de renseignement directement dans la page de la tournée.</p>

   <p className="homepage-content">Sur le Dashboard vous verrez s’afficher en priorité la personne suivante à voir, au fur et à mesure vous pourrez cliquer pour valider que le soin a été effectué.</p>

   <p className="homepage-content">D’autres évolutions sont encore à l’étude et nous sommes ouverts à toute proposition pouvant vous rendre cette application encore meilleure.</p>
  </div>

  <div className="homepage-credits">
    <h2 className="homepage-title">L'équipe</h2>

      <div className="member">
        <div className="member-avatar">
          <img src={jerome} alt="jerome"/>
        </div>
        
        <div className="member-contact">
          <p className="member-name">Jérôme Baillet</p>
          <p className="member-role">Product Owner</p>
          <div className="container-cabinet-infos">
            <img src={mail}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
              <a href="mailto:jerome.przybylski@gmail.com" className="member-mail">jerome.przybylski@gmail.com</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={github}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
              <a href="https://github.com/Zaphaan">Zaphaan</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={linkedin}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
            <a href="https://www.linkedin.com/in/jerome-baillet/">jerome-baillet</a>
            </p>
          </div>
        </div>
      </div>

      <div className="member">
        <div className="member-avatar">
          <img src={lindsay} alt="lindsay"/>
        </div>

        <div className="member-contact">
          <p className="member-name">Lindsay Mourinet</p>
          <p className="member-role">Lead Dev Back</p>
          <div className="container-cabinet-infos">
            <img src={mail}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
              <a href="mailto:lindsay.mourinet@gmail.com" className="member-mail">lindsay.mourinet@gmail.com</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={github}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
              <a href="https://github.com/LindsayMourinet">LindsayMourinet</a>
            </p>
          </div>
        </div>
      </div>

      <div className="member">
        <div className="member-avatar">
          <img src={stephane} alt="stephane"/>
        </div>

        <div className="member-contact">
          <p className="member-name">Stéphane Spassevitch</p>
          <p className="member-role">Lead Dev Front</p>
          <div className="container-cabinet-infos">
            <img src={mail}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
            <a href="mailto:sspassevitch@gmail.com" className="member-mail">sspassevitch@gmail.com</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={github}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
            <a href="https://github.com/Makariudo" >Makariudo</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={linkedin}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
            <a href="https://www.linkedin.com/in/stéphane-spassevitch-533a4351/">stéphane-spassevitch-533a4351</a>
            </p>
          </div>          
        </div>
      </div>

      <div className="member">
        <div className="member-avatar">
          <img src={celine} alt="celine"/>
        </div>

        <div className="member-contact">
          <p className="member-name">Céline Barbe</p>
          <p className="member-role">Scrum Master</p>
          <div className="container-cabinet-infos">
            <img src={mail}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
            <a href="mailto:celine.m.barbe@gmail.com" className="member-mail">celine.m.barbe@gmail.com</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={github}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
            <a href="https://github.com/CelineBarbe" >CelineBarbe</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={linkedin}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
            <a href="https://www.linkedin.com/in/celinebarbe/">celinebarbe</a>
            </p>
          </div>
        </div>
      </div>

      <div className="member">
        <div className="member-avatar">
          <img src={nicolas} alt="nicolas"/>
        </div>
        
        <div className="member-contact">
          <p className="member-name">Nicolas Faivre-Chalon</p>
          <p className="member-role">Git Master</p>
          <div className="container-cabinet-infos">
            <img src={mail}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
              <a href="mailto:faivrechalon.nicolas@gmail.com" className="member-mail">faivrechalon.nicolas@gmail.com</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={github}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
              <a href="https://github.com/kebloman">kebloman</a>
            </p>
          </div>
          <div className="container-cabinet-infos">
            <img src={linkedin}  alt="homme" className="container-cabinet-infos-img small"/>
            <p className="container-cabinet-infos-title">
              <a href="https://www.linkedin.com/in/nicolas-faivre-chalon-187b8011a/">nicolas-faivre-chalon-187b8011a</a>
            </p>
          </div>
        </div>
      </div>
  </div>

  <div className="homepage-legalnotice">
    <div className="identification">
      <h2 className="homepage-title">Mentions légales </h2>
      <p className="homepage-content-name">O’Care</p>
      <div className="container-cabinet-infos">
        <img src={mail}  alt="homme" className="container-cabinet-infos-img small"/>
        <p className="container-cabinet-infos-title">
        <a href="mailto:ocareappli@gmail.com" className="identification-mail">ocareappli@gmail.com</a>
        </p>
      </div>
      <p className="homepage-content">Product Owner : Jérome Baillet</p>
    </div>
    <div className="activity">
      <h2>Activité :</h2>
      <p className="homepage-content">Application à destination des infirmiers libéraux, un numéro SIREN en cours de validité est nécessaire et sera vérifié via l’API Sirene pour toute inscription.</p>
    </div>
    <div className="personnaldata">
      <h2>Mentions relatives à l’utilisation de données personnelles :</h2>
      <p className="homepage-content">Les données sont stockées sur les serveurs heroku.com.</p>
      <p className="homepage-content">Pour la suppression définitive de toutes vos données vous pouvez nous contacter par mail :<a href="mailto:ocareappli@gmail.com" className="personnaldata-mail">ocareappli@gmail.com</a></p>
    </div>
  </div>
      
</div>
  )
}

// == Export
export default HomePage;
