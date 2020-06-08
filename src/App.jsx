import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MainFlow from 'pages/main-flow/main-flow.entry';
import SelectionBar from 'components/selection-bar'
import Timer from 'components/timer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainFlow} />
        <Redirect to="/" />
      </Switch>
      <SelectionBar />
      <Timer />
    </BrowserRouter>
  );
}




export default App;
