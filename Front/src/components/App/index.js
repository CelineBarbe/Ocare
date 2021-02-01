// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Import components
import Header from 'src/components/Header';
import ReactFirebaseFileUpload from 'src/components/ReactFirebaseFileUpload'

// == Composant
const App = () => {
  return (<div className="app">
    <Header />
    <ReactFirebaseFileUpload />
  </div>)
};

// == Export
export default App;
