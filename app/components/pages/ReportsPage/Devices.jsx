import React from 'react';
import mac from 'file!../../../images/mac.png';
import linux from 'file!../../../images/linux.png';
import windows from 'file!../../../images/windows.png';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {cyan500} from 'material-ui/styles/colors';
import styles from '../../../reports.css';

const devTheme = getMuiTheme({
  cardHeader: {
    titleColor: cyan500,
    titleStyle: {
      float: 'right'
    }
  }

});

class Device extends React.Component {
  render () {
    return (
      <div className={styles.device}>
        {this.props.data.map((values, index) => {
          return  (
           <Card key={index}>
               <CardHeader
                   title={values.value}
                   avatar={values.image}/>
            </Card>
          );
        }
      )}
      </div>
    );
  }
}
class Devices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image: mac,
          value: '56%'
        },
        {
          image: linux,
          value: '44%'
        },
        {
          image: windows,
          value: '30%'
        }
      ]
    };
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(devTheme)}>
         <Device data={this.state.data}/>
     </MuiThemeProvider>
    );
  }
}
 export default Devices;
