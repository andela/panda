import React from 'react';
import Content from './content.jsx';
import styles from '../../../style.css';
import back from 'file!../../../images/back.jpg';
import laptop from 'file!../../../images/laptop.png';

const style = {
 backgroundImage: 'url(' + back + ')'
};

export default class MyComponent extends React.Component {
  render() {
    return (
      <div >
        <div className={styles.banner} style = {style}>
          <div className={styles.color_}>
            <h1> SET YOUR  APPLICATION APART </h1>
            <p> A step ahead to marketing and website analytics</p>
            <div className={styles.action_}> GET STARTED </div>
            <div className={styles.laptop}>
              <img src={laptop}/>
            </div>
          </div>
        </div>
        <div>
            <Content />
        </div>

      </div>);
  }
}
