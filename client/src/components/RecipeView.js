import React from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";



class RecipeView extends React.Component {

        state = {
            recipesArray: []
        }

        componentDidMount() {
            axios.get("/api/recipes")
            .then((dbRes) => {
                this.setState({recipesArray: dbRes.data});
                console.log(this.state.recipesArray);
            })
            .catch((err) => {
                console.log(err);
            })
        }

        render () {

        return (
            <>
            {this.state.recipesArray.map((element) => {
                return <RecipeCard key={element._id} 
                title={element.title} 
                difficulty={element.skillLevel} 
                cuisine={element.cuisine}/>
            })}
            </>
        )
    }
}

export default RecipeView;