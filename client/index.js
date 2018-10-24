import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// State
import { Provider } from 'react-redux';
import store from './state/store';

// Adds component state to Hot Module Reloading
import { AppContainer } from 'react-hot-loader';

// Styles
import WebFonts from 'webfontloader';
import 'normalize.css';
import './style.css';

// Polyfills
import '@babel/polyfill';
import 'cross-fetch/polyfill';

WebFonts.load({
  google: {
    families: ['Roboto', 'Roboto Slab']
  }
});

const root = document.getElementById('root');
const render = () => {
  const App = require('./App').default;
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root
  );
};

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept(['./App', './style.css'], () => {
    render();
  });
}

render();
