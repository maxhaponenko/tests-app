import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MainFlow from 'pages/main-flow/main-flow.entry';
import SelectionBar from 'components/selection-bar'
import Timer from 'components/timer'
import QuestionNavigation from 'components/question-navigation'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainFlow} />
        <Redirect to="/" />
      </Switch>
      <SelectionBar />
      <Timer />
      <QuestionNavigation />
    </BrowserRouter>
  );
}




export default App;
