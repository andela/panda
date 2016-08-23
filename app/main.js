import styles from './style.scss';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';



render((
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home}/>
      <Route component={About} path='/about'/>
      <Route component={Services} path='/services'/>
      <Route component={Contact} path='/contacts'/>
    </Route>
  </Router>
), document.getElementById('id'));
