import React from 'react';
import moment from 'moment';
import styles from '../../../reports.css';
import { Line } from 'react-chartjs';
import { Chart } from 'chartjs';
import request from 'superagent';
import groupBy from 'lodash.groupby';
require('moment-range');
require('chartjs');

class Visits extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };

    this.setNewData = this.setNewData.bind(this);
  }

  componentDidMount () {
    request('GET', '/api/reports/visitors')
    .end((err, res) => {
      if (err) {
        res.send(err);
      }
      this.setNewData(res.body);
    });
  }

  setNewData(newData) {
    this.setState({
      data: newData
    });
  }
// visit.browser
  render() {
    const period = [];
    const datas =[];
    const start = new Date(2012, 2, 1);
    const end   = new Date(2012, 2, 5) || start;
    const periodRange = moment.range(start, end);
    groupBy(this.state.data, (visit) => {
      period.push(moment(visit.arrival_time).format('YYYY MM DD').length);
    });
    periodRange.by('days', function(moment) {
      datas.push(moment.format('MMM Do YY'));
});
    const chart = {
      type: 'line',
      data: {
        labels: datas,
        datasets: [{
          label: 'Number of Visits',
          data: period,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          pointBackgroundColor: '#000',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
      }
    };
    return (
      <div className={styles.graph}>
        <h3>Number of visits</h3>
        <Line data={chart.data} options={chart.options} height='250' width='600' redraw/>
      </div>
    );
  }
}

export default Visits;
