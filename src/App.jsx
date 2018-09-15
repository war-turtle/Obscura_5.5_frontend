import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Onboard from './components/onboard';
import './App.css';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/onboard" component={Onboard} />
    </Switch>
  </BrowserRouter>
);

export default App;
