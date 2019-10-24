import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { hot } from 'react-hot-loader/root';
import configureStore from 'redux/store';
// ROUTES
import Routes from 'pages/RootRoutes';

const { store, persistor, history } = configureStore();

// EXPORTED APP
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default hot(App);
