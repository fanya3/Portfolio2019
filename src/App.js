import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage' 
import AboutMe from './pages/AboutMe/AboutMe' 

 const App = () => {
  return (
    <div className="App">
    <Switch>
      <Route exact path ='/' component={Homepage}/>
      <Route exact path ='/about-me' component={AboutMe}/> 
    </Switch>
    </div>
  );
}

export default App;

