import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Switcher() {
  return (
    <Switch>
      <Route component={ Home } path="/" exact />
    </Switch>
  );
}

export default Switcher;
