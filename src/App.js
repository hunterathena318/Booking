import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import About from './pages/About';

import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/rooms" component={Rooms}/>
      <Route exact path = "/single-room/:slug " component={SingleRoom} /> 
      <Route exact path = "/about-us" component={About}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
