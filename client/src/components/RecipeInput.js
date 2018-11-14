import React from "react";
import Ingredient from "./Ingredient";
import Step from "./Step";
import axios from "axios";
import "../css/main.css";

let stepNumber = 1;
let ingredientNumber = 1;

class RecipeInput extends React.Component {

    state = {
        ingredientArray: [1],
        directionsArray: [1]
    }

    printValue(event) {
        console.log(document.getElementById("recipeTitle").value)
    }

    addIngredient() {
        ingredientNumber++;
        this.state.ingredientArray.push(this.state.ingredientArray + 1);
        this.setState({ingredientArray: this.state.ingredientArray})
    }

    removeIngredient() {
        ingredientNumber--;
        this.state.ingredientArray.pop();
        this.setState({ingredientArray: this.state.ingredientArray});
    }

    addStep() {
        stepNumber++;
        this.state.directionsArray.push(stepNumber);
        this.setState({directionsArray: this.state.directionsArray})
    }

    removeStep() {
        stepNumber --;
        this.state.directionsArray.pop();
        this.setState({directionsArray: this.state.directionsArray});
    }

    recipeSubmit(event) {
        event.preventDefault();

        const recipeTitle = document.getElementById("recipeTitle").value;
        const difficulty = document.getElementById("difficulty").value;
        const cuisine = document.getElementById("cuisine").value;
        const prepTime = document.getElementById("prepTime").value;
        const cookTime = document.getElementById("cookTime").value;

        const ingredients = document.querySelectorAll(".ingredient");

        const ingredientsList = []; 

        for(let i = 0; i < ingredients.length; i++) {

            let ingredient = {
                qty: ingredients[i].children[0].children[0].value,
                unit: ingredients[i].children[1].children[0].value,
                ingredient: ingredients[i].children[2].children[0].value
            }

            ingredientsList.push(ingredient);

        }

        const directions = document.querySelectorAll(".direction");

        const directionsList = [];

        for(let i = 0; i < directions.length; i++) {
            directionsList.push(directions[i].value)
        }

        const recipeInput = {

            title: recipeTitle,
            skillLevel: difficulty,
            cuisine: cuisine,
            prepTime: prepTime,
            cookTime: cookTime,
            ingredients: ingredientsList,
            directions: directionsList

        }

        axios.post("/api/recipes", recipeInput)
            .then((dbRes) => {
                this.props.handleClose();
            })
            .catch((err) => {
                console.log(err)
            })

    }

    // redirect() {
    //     this.props.history.push('http://localhost:3000/')
    // }

    render() {

        return (
            <form className="mb-5" onSubmit={(event) => this.recipeSubmit(event)}>
                <div className="form-group">
                    <div className="form-row">
                        <div className="col-md-10">
                            <label htmlFor="recipeTitle">Recipe Title</label>
                            <input type="text" className="form-control" placeholder="Chicken Parmesan" id="recipeTitle"></input>
                        </div>
                        </div>

                        <div className="form-row">
                        <div className="col-md-5">
                            <label htmlFor="difficulty">Difficulty Level</label>
                            <select className="form-control" id="difficulty">
                                <option defaultValue>Choose...</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="cuisine">Cuisine</label>
                            <select className="form-control" id="cuisine">
                                <option defaultValue>Choose...</option>
                                <option>American</option>
                                <option>Carribean</option>
                                <option>Chinese</option>
                                <option>Creole</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Indian</option>
                                <option>Italian</option>
                                <option>Japanese</option>
                                <option>Korean</option>
                                <option>Mediterranian</option>
                                <option>Mexican</option>
                                <option>Thai</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="col-md-5">
                            <label htmlFor="prepTime">Prep Time (minutes)</label>
                            <input type="number" className="form-control" id="prepTime"></input>
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="cookTime">Cook Time (minutes)</label>
                            <input type="number" className="form-control" id="cookTime"></input>
                        </div>
                    
                    </div>
                    <div className="form-row">
                    <h2>Ingredients</h2>
                    </div>
                    <div className="form-row" id="ingredients">
                        <div className="col-md-2">
                            <h3>Qty.</h3>
                        </div>
                        <div className="col-md-3">
                            <h3>Unit</h3>
                        </div>
                        <div className="col-md-5">
                            <h3>Ingredient</h3>
                        </div>
                    </div>
                    <div id="ingredientsList">
                    {this.state.ingredientArray.map((element) => {
                        return <Ingredient key={element}/>
                    })}
                    </div>
                    <i className="fas fa-plus-circle" onClick={() => this.addIngredient()}></i>
                    <i className="fas fa-minus-circle ml-2" onClick={() => this.removeIngredient()}></i>
                </div>
                <h2>Directions</h2>
                <div className="directionsList">
                    {this.state.directionsArray.map((element) => {
                        return <Step key={element} stepNumber={element}/>
                    })}
                </div>
                <i className="fas fa-plus-circle" onClick={() => this.addStep()}></i>
                <i className="fas fa-minus-circle ml-2" onClick={() => this.removeStep()}></i>
                <div className="form-row">
                <div className="col-md-10">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </div>

            </form>
        )
    }

}

export default RecipeInput;