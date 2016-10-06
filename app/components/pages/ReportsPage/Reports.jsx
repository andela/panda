import React from 'react';
import Visits from './Visits.jsx';
import VisitsMap from './Map.jsx';
import Session from './Sessions.jsx';

class Reports extends React.Component {
  render () {
    return (
      <div>
        <Visits/>
        <VisitsMap/>
        <Session  />
      </div>
    );
  }
}

export default Reports;
