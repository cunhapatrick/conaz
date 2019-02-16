import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import store from './store';

import Routes from './routes';

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
