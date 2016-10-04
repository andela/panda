import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/pages/LandingPage/AppBar.jsx';
import Home from './components/pages/LandingPage/Home.jsx';
import About from './components/pages/About.jsx';
import Services from './components/pages/Services.jsx';
import Contact from './components/pages/Contact.jsx';
import SignUp from './components/pages/AuthPage/SignUp.jsx';
import Login from './components/pages/AuthPage/login.jsx';

render((
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home}/>
      <Route path='/about'  component={About}/>
      <Route path='/services' component={Services}/>
      <Route path='/contacts' component={Contact}/>
    </Route>
    <Route path='/signup' component={SignUp} />
    <Route path='/login' component={Login} />

  </Router>
), document.getElementById('root'));
