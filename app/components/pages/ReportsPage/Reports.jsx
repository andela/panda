import React from 'react';
import Visits from './Visits.jsx';
import VisitsMap from './Map.jsx';
import Session from './Sessions.jsx';
import Devices from './Devices.jsx';
import Browsers from './Browsers.jsx';

class Reports extends React.Component {
  render () {
    return (
      <div>
        <Visits/>
        <Session/>
        <VisitsMap/>
        <Browsers/>
        <Devices/>
      </div>
    );
  }
}

export default Reports;
