// == Import npm
import React, {useEffect} from 'react';
// == Import
import './dashboard.scss';

// == Import 
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import Main from 'src/components/Main';

// == Composant
const Dashboard = ({ dashboardInit, default_cabinet, isLoading }) => {
  useEffect(() => {
  if(default_cabinet && !isLoading){
    console.log('coucou appelé qu au moment du didMount de dashboard !');
    dashboardInit();
  }
}, [default_cabinet])
 
  return (
    <>
      <Header />
      <Main />
      <Nav />
    </>
  
  )
};

// == Export
export default Dashboard;
