import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'src/reducers';
import authMiddleware from 'src/middlewares/auth';
import initDashboard from 'src/middlewares/initDashboard';
import searchingMiddleware from 'src/middlewares/searching';
import patientsMiddleware from 'src/middlewares/patientsMW';

// on crée le store
const store = createStore(
  rootReducer,
  composeWithDevTools( // devtools
    // branchement de middleware
    applyMiddleware(authMiddleware),
    applyMiddleware(initDashboard),
    applyMiddleware(searchingMiddleware),
    applyMiddleware(patientsMiddleware),
  ),
);

// on l'exporte par défaut
export default store;
