import React from 'react';
import { Tabs, Tab } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from '../../../App.css';
import ThirdParty from './ThirdParty.jsx';
import SignUpComponent from './SignUpComponent.jsx';
import Add from 'material-ui/svg-icons/social/group-add';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const pandaTheme = getMuiTheme({
  palette: {
    primary1Color: '#673AB7',
    primary2Color: '#512DA8',
    primary3Color: '#D1C4E9',
    accent1Color: '#448AFF',
    accent2Color: '#3498DB',
    textColor: '#212121',
    secondaryTextColor: '#757575',
    canvasColor: '#303030',
    borderColor: '#BDBDBD'

  }
});

export default class SignUp extends React.Component {

    render() {
        return (<div className={styles.container}>
                    <div className= {styles.container1} >
                    <MuiThemeProvider muiTheme={getMuiTheme(pandaTheme)}>
                        <Tabs>
                            <Tab icon={<Add/>} label="Sign Up" value='panel-2'>
                                <SignUpComponent />
                                <h2> OR </h2>
                                <ThirdParty />
                            </Tab>
                      </Tabs>
                      </MuiThemeProvider>
                      </div>
                </div>
               );
		}
}
