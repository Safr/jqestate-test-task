import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// COMPONENTS
import App from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const rootEl = document.getElementById('root');

const renderApp = Application => {
  ReactDOM.render(<Application />, rootEl);
};

renderApp(App);

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}
