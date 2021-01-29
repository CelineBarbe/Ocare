// == Import : npm
import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// store
import store from 'src/store';
// Composants
import App from 'src/containers/App';

const rootReactElement = (
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
const target = document.getElementById('root');
render(rootReactElement, target);
