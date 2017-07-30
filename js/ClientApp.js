// @flow

import React from 'react';
// import Perf from 'react-addons-perf';
import { render } from 'react-dom';

import App from './App';

// we use it for speed tasting
// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
