import React from 'react';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import MainFlow from './pages/main-flow/main-flow.entry';


class App extends React.Component {

   render() {
      return (
         <MainFlow />
         // <BrowserRouter> //ForMax: why would you use BrowserRouter in SPA?
         //    <Switch>
         //       <Route exact path="/" component={MainFlow} />
         //       <Redirect to="/" />
         //    </Switch>
         // </BrowserRouter>
      );
   }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
   
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
