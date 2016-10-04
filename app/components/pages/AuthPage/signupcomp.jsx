import React from 'react';
import { RaisedButton, TextField } from 'material-ui';
import styles from '../../../App.css';
import request from 'superagent';


export default class SignupComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleSubmit(e) {
    e.preventDefault();

    const user={
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    };
    request
      .post('/signup')
      .send(user)
      .end((err, response) => {
        console.log('THE RESPONSE IS: ', response);
      });

}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <TextField
                className={styles.textfield}
                hintText="Full Name"
                name="name"
            /><br/>
            <TextField
                className={styles.textfield}
                hintText="Email"
                name="email"
            /><br />
            <TextField
                className={styles.textfield}
                hintText="Password"
                type="password"
                name="password"
            /><br/><br/>
            <RaisedButton type='submit'
            label='SignUp' primary={true}
            className={styles.formatButton}
            />
            <br/><br/>
        </form>
      </div>


    );
  }
}
