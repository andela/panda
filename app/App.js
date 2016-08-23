import React from 'react';
import NavLink from './components/pages/NavLink';

class App extends React.Component{

  render() {
    return (
      <div>
        <h1> Panda Analytics </h1>
        <ul role="nav">
          <li><NavLink onlyActiveOnIndex to="/" >Home</NavLink></li>
          <li> <NavLink to="/about">About </NavLink></li>
          <li> <NavLink to="/services">Services</NavLink></li>
          <li> <NavLink to="/contacts">Contact Us</NavLink></li>
        </ul>
        {this.props.children}
      </div>)
    ;
  }
}

export default App;
