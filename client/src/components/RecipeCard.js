import React from "react";
import "../css/main.css";

const RecipeCard = (props) => {
    return (
        <div className="card col-md-6">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.cuisine}, {props.difficulty}</h6>
  </div>
</div>
    )
}

export default RecipeCard;