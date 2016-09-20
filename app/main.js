import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/pages/LandingPage/AppBar.jsx';
import Home from './components/pages/LandingPage/Home.jsx';
import About from './components/pages/About.jsx';
import Services from './components/pages/Services.jsx';
import Contact from './components/pages/Contact.jsx';

render((
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home}/>
      <Route component={About} path='/about'/>
      <Route component={Services} path='/services'/>
      <Route component={Contact} path='/contacts'/>
    </Route>
  </Router>
), document.getElementById('root'));
