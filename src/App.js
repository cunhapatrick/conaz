import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import './styles/globals';
import store from './store';
// import Routes from "./routes";

import Main from './pages/main';

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
