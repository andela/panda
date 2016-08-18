import React from 'react';
import { Link } from 'react-router';

class Hello extends React.Component{
  render() {
    return (
      <div>
        <h1> React Router </h1>
        <ul role="nav">
          <li> <Link to="/about">About</Link></li>
        </ul>
      </div>)
    ;
  }
}

export default Hello;
