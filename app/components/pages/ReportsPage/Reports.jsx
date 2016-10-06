import React from 'react';
import Visits from './Visits.jsx';
import VisitsMap from './Map.jsx';
import Session from './Sessions.jsx';
import Devices from './Devices.jsx';
import Browsers from './Browsers.jsx';
import styles from '../../../reports.css';


class SessionGroup extends React.Component {
  render () {
    return (
      <div className={styles.comb}>
      <Session className={styles.comb.session}/>
      <VisitsMap className={styles.comb.map}/>
      </div>
    );
  }
}

class BrowserGroup extends React.Component {
  render () {
    return (
      <div className={styles.comb1}>
      <Browsers className={styles.comb.browsers}/>
      <Devices className={styles.comb.devices}/>
      </div>
    );
  }
}
class Reports extends React.Component {
  render () {
    return (
      <div>
        <Visits/>
        <SessionGroup/>
        <BrowserGroup/>
      </div>
    );
  }
}

export default Reports;
