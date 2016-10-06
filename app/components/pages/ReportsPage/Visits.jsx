import React from 'react';
import moment from 'moment';
import styles from '../../../reports.css';
import { Line } from 'react-chartjs';
import { Chart } from 'chartjs';

require('moment-range');

class Visits extends React.Component {
  render() {
    const datas =[];
    const start = new Date(2012, 2, 1);
    const end   = new Date(2012, 2, 5);
    const range1 = moment.range(start, end);
    range1.by('days', function(moment) {
      datas.push(moment.format('MMM Do YY'));
});
    const chart = {
      type: 'line',
      data: {
        labels: datas,
        datasets: [{
          label: 'Numner of Visits',
          data: [112, 89, 233, 50, 20, 13, 30],
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
        <Line data={chart.data} options={chart.options} height='250' width='600' redraw/>
      </div>
    );
  }
}

export default Visits;
