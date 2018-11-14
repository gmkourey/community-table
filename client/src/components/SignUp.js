import React, { Component } from 'react';
import { auth } from '../firebase';
import "../css/main.css";
import TextField from '@material-ui/core/TextField';

const SignUpPage = () =>
  <div>
    <SignUpForm />
  </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isValidCombo: true
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {

    constructor(props) {
        super(props);
    this.state = {...INITIAL_STATE};
    }

  onSubmit = (event) => {
    event.preventDefault();

    if(this.state.username !== "" && this.state.email !== "" && (this.state.passwordOne === this.state.passwordTwo)) {
    const {
        email,
        passwordOne,
      } = this.state;
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
        })
        .catch(
          this.setState({isValidCombo: false})
        );
    } else {
      this.setState({isValidCombo: false})
    }

  }

  render() {

    const {
        username,
        email,
        passwordOne,
        passwordTwo
      } = this.state;

      const textFieldStyle = {
        display: "block",
        padding: "10px 0px"
      }
    return (
      <form onSubmit={this.onSubmit} className="signInUpForm">
        <h2>Sign Up</h2>
        <TextField
          value={username}
          style={textFieldStyle}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <TextField
          value={email}
          style={textFieldStyle}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <TextField
          value={passwordOne}
          style={textFieldStyle}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <TextField
          value={passwordTwo}
          style={textFieldStyle} 
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="buttonStyle" type="submit">
          Sign Up
        </button>

        {!this.state.isValidCombo ? 
        <p className="error">It doesnt look like you filled out the signup form correctly. Please 
        try again.</p> : <></>}
      </form>
    );
  }
}

export default SignUpPage;