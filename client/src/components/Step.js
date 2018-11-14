import React from "react";

const Step = (props) => {
    return (
        <>
        <h3>Step {props.stepNumber}</h3>
        <textarea className ="direction" cols="100"></textarea>
        </>
    )
}

export default Step;