import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '~/containers/AppContainer';
import createStore from '~/store';

const store = createStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);

