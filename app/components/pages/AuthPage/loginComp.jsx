import React from 'react';
import { RaisedButton, TextField } from 'material-ui';
import styles from '../../../App.css';
import request from 'superagent';

export default class LoginComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const auth = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    request
      .post('/login')
      .send(auth)
      .end((err, response) => {
        console.log('status', response);
  
      });
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <br/>
            <TextField
                className={styles.textfield}
                hintText="Email"
                name="email"
                label htmlFor="Email"
            /><br />

            <TextField
                className={styles.textfield}
                hintText="Password"
                name="password"
                  type="password"
            /><br/><br/>
            <RaisedButton type='submit'
            label='LogIn' primary={true}
            className={styles.formatButton}/>
            <br/><br/>
        </form>
      </div>
    );
  }
}
