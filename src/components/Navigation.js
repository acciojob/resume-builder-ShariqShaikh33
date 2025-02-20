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
            <button id="back"><Link to={prevPath}>Back</Link></button>
            <button id="next"><Link to={nextPath}>Next</Link></button>
            <button id="save_continue" onClick={handleChange}>Save and Continue</button>
        </div>
    )
}
export default Navigation;