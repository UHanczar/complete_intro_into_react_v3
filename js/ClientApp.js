// @flow

import React from 'react';
// import Perf from 'react-addons-perf';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';

// we use it for speed tasting
// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
