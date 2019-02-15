import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" context={Main} />
    </Switch>
  </BrowserRouter>
);
