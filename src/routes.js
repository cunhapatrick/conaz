import React from 'react';
import { BrowseRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';

export default () => (
  <BrowseRouter>
    <Switch>
      <Route exact path="/" context={Main} />
    </Switch>
  </BrowseRouter>
);
