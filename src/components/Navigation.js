import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Navigation=({prevPath, nextPath, type})=>{

    const dispatch = useDispatch();
    const handleChange=(e)=>{
        dispatch({type: {type}, payload: e.target.value})
    }

    return (
        <div>
            <button><Link to={prevPath}>Back</Link></button>
            <button><Link to={nextPath}>Next</Link></button>
            <button onClick={handleChange}>Save and Continue</button>
        </div>
    )
}
export default Navigation;