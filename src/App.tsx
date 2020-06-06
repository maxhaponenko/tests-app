import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import TestSelection from 'pages/test-selection/test-selection.page'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={TestSelection} />
      <Redirect to="/" />
    </BrowserRouter>
  );
}




export default App;
