import React, { Component } from 'react';
import "../css/main.css";
import TextField from '@material-ui/core/TextField';
import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  isValidCombo: true
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.password);
    if(this.state.email !== "" && this.state.password !== "") {
    const {
      email,
      password,
    } = this.state;
    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Sign In success")
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    this.setState({isValidCombo: false})
  }
}

  render() {
    const {
      email,
      password
    } = this.state;

    const styles= {
      textField: {
        display: "block",
        padding: "10px 0px"
      }
    }
    return (
      <form onSubmit={this.onSubmit} className="signInUpForm">
          <h2>Sign In</h2>
        <TextField
        style={styles.textField}
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <TextField
        style={styles.textField}
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button className="buttonStyle" type="submit">
          Sign In
        </button>
        {!this.state.isValidCombo ? 
        <p className="error">It doesnt look like you filled out the signup form correctly. Please 
        try again.</p> : <></>}
      </form>
    );
  }
}

export default SignInForm;