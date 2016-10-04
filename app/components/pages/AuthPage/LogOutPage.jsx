import React from 'react';
import Logo from 'file!../../images/image.jpg';
import styles from '../../../App.css';

export default class LogOutPage extends React.Component {
    render() {
      return (<div className={styles.container}>
                  <img src={Logo} width='300px'/>
                  <h1 className={styles.par}  >
                       <p>Sign Up</p>
                  </h1>
                  <Paper style = {styles.PaperStyle}>
                      <div className={styles.FloatLeft}>
                          <LogOutButton />
                      </div>
                  </Paper>
              </div>
      );
    }

}
class LogOutButton extends React.Component {

    render() {
        return (
            <div className={styles.margin2}>
                <RaisedButton label = 'Logout' primary ={true}
                className = {styles.button} href="/logout"/><br/>
            </div>
        );
    }
    next() {
      
    }
}
