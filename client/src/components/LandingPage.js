import React from "react";
import Navbar from "./Navbar";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";
import "../css/main.css";
import {firebase} from "../firebase";
import "../css/landingPage.css";

class LandingPage extends React.Component {

    state = {signUpVisible: true};

    handleButtonClick = () => {
        if(this.state.signUpVisible) {
        this.setState({signUpVisible:false})
        } else {
            this.setState({signUpVisible: true})
        }
    }

    componentDidMount () {
        firebase.auth.onAuthStateChanged(authUser => {
        })
    }
    render () {
        const styles = {
            createLoginForm: {
            backgroundColor: "white",
            display: "inline-block",
            position: "absolute",
            top: 200,
            left: 150,
            padding: 25,
            border: "1px solid lightgrey",
            borderRadius: 5
            }
        }
        return (
            <>
            <Navbar/>
            <div className="landingPage">
                <div style={styles.createLoginForm}>
                {this.state.signUpVisible ? <SignUpForm/> : <SignInForm/>}
                <p onClick={this.handleButtonClick} className="changeLink">{this.state.signUpVisible ? 
                "Already a User? Click Here to Sign In" :
                "Not a User Yet? Click Here to Sign Up"}</p>
                </div>
            </div>
            </>
        )
    }
}

export default LandingPage;