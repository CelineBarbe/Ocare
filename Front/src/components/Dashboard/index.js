// == Import npm
import React, {useEffect} from 'react';
// == Import
import './dashboard.scss';

// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import Main from 'src/components/Main';

// == Composant
const Dashboard = ({ dashboardInit }) => {
  useEffect(() => {
    console.log('coucou appelé qu au moment du didMount de dashboard !');
    dashboardInit();
}, [])
 
  return (
  <div className="dashboard">
    <Header />
    <Main />
    <Nav />
  </div>
  )
};

// == Export
export default Dashboard;
