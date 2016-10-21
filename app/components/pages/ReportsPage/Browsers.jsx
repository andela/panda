import React from 'react';
import request from 'superagent';
import groupBy from 'lodash.groupby';
import safari from 'file!../../../images/safari.jpeg';
import chrome from 'file!../../../images/chrome.jpeg';
import firefox from 'file!../../../images/firefox.jpeg';
import styles from '../../../reports.css';

class Browser extends React.Component {
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
  render () {
    const style = {
      width:'300px',
      height:'30px',
      color: 'white',
      fontSize: 200
    };

    groupBy(this.state.data, (visit) => {
      return visit.browser;
    });
    return (
      <div className={styles.browsers}>
        {this.props.data.map((browser, index) => {
          return (
            <div className={styles.browser} key={index} >
              <img src={browser.image}></img>
              <meter value={browser.percentage} min="0" max="10" style={style}><p>{browser.name}</p></meter>
            </div>
          );
        })}
      </div>
    );
  }
}
class Browsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          image: firefox,
          percentage: 5,
          name: firefox
        },
        {
          image: chrome,
          percentage: 7,
          name: chrome
        },
        {
          image: safari,
          percentage: 1,
          name: safari
        }
      ]
    };

    // this.progress = this.progress.bind(this);
  }

  // progress(event) {
  //   if (percentage >= 10) {
  //     this.setState({percentage: 100});
  //   } else {
  //     this.setState({percentage: percentage += 1});
  //   }
  // }

//   componentDidMount() {
//     console.log('MOUNT');
//   setInterval(this.progress(5), 1000);
// }

  render () {
    return(
      <div>
        <Browser data={this.state.data}/>
      </div>
    );
  }
}

export default Browsers;
