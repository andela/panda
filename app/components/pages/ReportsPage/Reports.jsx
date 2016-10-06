import React from 'react';
import Visits from './Visits.jsx';
import VisitsMap from './Map.jsx';
import Session from './Sessions.jsx';
import Devices from './Devices.jsx';
import Browsers from './Browsers.jsx';
// import styles from '../../../reports.css';


// class SessionGroup extends React.Component {
//   render () {
//     return (
//       <div className={styles.comb}>
//       <Session className={styles.comb.session}/>
//       <VisitsMap className={styles.comb.map}/>
//       </div>
//     );
//   }
// }
//
// class BrowserGroup extends React.Component {
//   render () {
//     return (
//       <div className={styles.comb1}>
//       <Browsers className={styles.comb1.browsers}/>
//       <Devices className={styles.comb1.devices}/>
//       </div>
//     );
//   }
// }
class Reports extends React.Component {
  render () {
    return (
      <div>
        <Visits/>
        <Session/>
        <VisitsMap/>
        <Devices/>
        <Browsers/>
      </div>
    );
  }
}

export default Reports;
