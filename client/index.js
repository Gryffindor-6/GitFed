import React from 'react';
import ReactDOM from 'react-dom';

// Adds component state to Hot Module Reloading
import { AppContainer } from 'react-hot-loader';

// Polyfills
import '@babel/polyfill';
import 'cross-fetch/polyfill';

// Styles
import 'normalize.css';

const root = document.getElementById('root');
const render = () => {
  const App = require('./App').default;
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    root
  );
};

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App', () => {
    render();
  });
}

render();
