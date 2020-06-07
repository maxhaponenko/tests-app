import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import TestSelection from 'pages/test-selection/test-selection.entry';
import SelectionBar from 'components/selection-bar'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={TestSelection} />
      <Redirect to="/" />
      <SelectionBar />
    </BrowserRouter>
  );
}




export default App;
