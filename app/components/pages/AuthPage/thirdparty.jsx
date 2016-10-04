import React from 'react';
import { RaisedButton } from 'material-ui';
import styles from '../../../App.css';



export default class ThirdParty extends React.Component {
    render() {
        return (
            <div  className={styles.thirdParty}>
                <RaisedButton href="/auth/google" label='Sign in with Google'secondary={true} className={styles.formatButton}>
                    <i className="fa fa fa-google fa-2x" style ={{color:'white'}}></i>
                </RaisedButton>
                <br/><br/>
                <RaisedButton href="/auth/github" label='Sign in with Github'primary={true} className={styles.formatButton}>
                    <i className="fa fa-github fa-2x" style ={{color:'white'}}></i>
                </RaisedButton>
            </div>
        );
    }
}
