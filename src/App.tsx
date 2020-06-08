import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import TestSelection from 'pages/test-selection/test-selection.entry';
import SelectionBar from 'components/selection-bar'
import Timer from 'components/timer'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={TestSelection} />
      <Redirect to="/" />
      <SelectionBar />
      <Timer />
    </BrowserRouter>
  );
}




export default App;
