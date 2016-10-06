import React from 'react';
import styles from '../../../style.css';
import { Link } from 'react-router';
import Home from './Home.jsx';

class AppBar extends React.Component{

  render() {
    return (
      <div>
        <nav>
        <div className={styles.logo}>Panda Analytics</div>
        <ul role="nav">
          <li><Link onlyActiveOnIndex to="/" >Home </Link></li>
          <li> <Link to="/about">About </Link></li>
          <li> <Link to="/services">Services</Link></li>
          <li> <Link to="/contacts">Contact Us</Link></li>
          <li className={styles.signup}><Link to="/login"> Login</Link> </li>

        </ul>

        </nav>
        {this.props.children || <Home/>}
      </div>
    );
  }
}

AppBar.propTypes = {
  children: React.PropTypes.node
};

export default AppBar;
