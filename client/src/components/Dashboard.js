import React from "react";
import Modal from "@material-ui/core/Modal";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";
import RecipeInput from "./RecipeInput";
import RecipeView from "./RecipeView";
import "../css/main.css";

class Dashboard extends React.Component {

    state = {
        addRecipeLive: false
    }

    addRecipe() {
        this.setState({addRecipeLive: true});
    }

    handleClose() {
        this.setState({addRecipeLive: false});
    }


    

    render() {

        return(
            <>
            <Navbar/>
            <div className="container">
            
            {(this.state.addRecipeLive) ? (<RecipeInput handleClose={this.handleClose.bind(this)}/>) : (<RecipeView/>)}
            

            <button onClick={() => this.addRecipe()}>Add Recipe</button>
            </div>

            
            </>
        )
    }
}
  
export default Dashboard;