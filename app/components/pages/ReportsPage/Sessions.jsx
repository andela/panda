/* eslint-disable no-unused-vars*/
import React from 'react';
// import styles from '../../../style.css';

// create a component called App
class Session extends React.Component {
  // render method returns how we want our html template to look like
  constructor(props) {
    super(props);
    this.state = {
      data:
      [
        {
          ipAddress: '41.209.15.146',
          time: '10:03:04',
          date: 'Tuesday, 4 October 2016'
        },
        {
          ipAddress: '50.18.212.157',
          time: '11:06:07',
          date: 'Tuesday, 4 October 2016'
        },
        {
          ipAddress: '52.25.214.31',
          time: '11:06:07',
          date: 'Tuesday, 4 October 2016'
        },
        {
          ipAddress: '50.18.212.157',
          time: '11:06:07',
          date: 'Tuesday, 4 October 2016'
        },
        {
          ipAddress: '52.8.19.58',
          time: '11:06:07',
          date: 'Tuesday, 4 October 2016'
        }

      ]

    }
  }



  render () {
    return (
      <div>
        <table>
          <thead>
            <td>IP Address</td>
            <td>Time</td>
            <td>Date</td>
          </thead>
          <tbody>
            {this.state.data.map((session, index) => <TableRow key = {index} data = {session} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.ipAddress}</td>
            <td>{this.props.data.time}</td>
            <td>{this.props.data.date}</td>
         </tr>
      );
   }
}

// enables App.jsx to be imported
export default Session;
