import React from "react";

const Ingredient = () => {
    return (
        <div className="form-row ingredient">
                    <div className="col-md-2">
                    <input type="number" className="form-control" id="quantity"></input>
                    </div>

                    <div className="col-md-3">
                    <select type="number" className="form-control" id="unit">
                        <option defaultValue>lbs.</option>
                        <option>quantity</option>
                        <option>cups</option>
                        <option>Tbsp.</option>
                        <option>tsp.</option>
                        <option>Pinch</option>
                    </select>
                    </div>

                    <div className="col-md-5">
                    <input type="text" className="form-control" id="ingredient"></input>
                    </div>
                    </div>
    )
}

export default Ingredient;