import React from 'react';
import {Switch, Route} from 'react-router-dom'

import AboutMe from './pages/AboutMe/AboutMe' 
import DisplayCaseDesign from './pages/DisplayCases/DisplayCaseDesign' 
import DisplayCaseDigital from './pages/DisplayCases/DisplayCaseDigital' 
import Homepage from './pages/Homepage/Homepage' 

import './_GlobalStyle.scss';

 const App = () => {
  return (
    <div className="App">
    <Switch>
      <Route exact path ='/' component={Homepage}/>
      <Route path ='/about-me' component={AboutMe}/> 
      <Route path ='/designproject/:name' component={DisplayCaseDesign}/> 
      <Route path ='/digitalproject/:name' component={DisplayCaseDigital}/>
    </Switch>
    </div>
  );
}

export default App;

