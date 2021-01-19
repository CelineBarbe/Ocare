// == Import npm
import React from 'react';
// == Import
import './dashboard.scss';

// == Import 
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Main from 'src/components/Main';

// == Composant
const Dashboard = () => {
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
