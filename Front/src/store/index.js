import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'src/reducers';
import authMiddleware from 'src/middlewares/auth';
import initDashboard from 'src/middlewares/initDashboard';
import searchingMiddleware from 'src/middlewares/searching';
import patientsMiddleware from 'src/middlewares/patientsMW';
import cabinetsMiddleware from 'src/middlewares/cabinetsMW';
import logBookMiddleware from 'src/middlewares/logsMW';
import tourMiddleware from 'src/middlewares/tourMW';

// on crée le store
const store = createStore(
  rootReducer,
  composeWithDevTools( // devtools
    // branchement de middleware
    applyMiddleware(authMiddleware),
    applyMiddleware(initDashboard),
    applyMiddleware(searchingMiddleware),
    applyMiddleware(cabinetsMiddleware),
    applyMiddleware(patientsMiddleware),
    applyMiddleware(logBookMiddleware),
    applyMiddleware(tourMiddleware),
  ),
);

// on l'exporte par défaut
export default store;
