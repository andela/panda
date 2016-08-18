import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import Home from './components/Home';
import About from './components/pages/About';

render((
  <Router history={hashHistory}>
    <Route component={Home} path='/'/>
    <Route component={About} path='/about'/>
  </Router>
), document.getElementById('id'));
