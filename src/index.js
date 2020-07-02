import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components';
import store from 'store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
