import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Onboard from './components/onboard';
import SideBar from './container/sidebar';
import Dashboard from './components/dashboard';
import './App.css';

const jwtDecode = require('jwt-decode');


const App = () => {
  const user = localStorage.getItem('jwtToken') ? jwtDecode(localStorage.getItem('jwtToken')) : null;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/onboard" component={Onboard} />
        <SideBar exact path="/dashboard" component={Dashboard} user={user} />
      </Switch>
    </BrowserRouter>);
};

export default App;
