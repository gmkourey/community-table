import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

const App = () => 
  <Router>
    <>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </>
  </Router>


export default App;
