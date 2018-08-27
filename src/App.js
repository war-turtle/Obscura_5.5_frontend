import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import Home from './components/Home';
import './App.css';


const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
