import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Socialmedia=()=>{
    return(
        <>
            <p>Add social links like linkedin, github etc</p>
            <form>
                <input type="url" id="Social" name="Social" placeholder="Social Links*" required></input>
            </form>
            <button id="add_social">Add Social</button>
            
            <Navigation prevPath="/social" nextPath="/final"/>

        </>
    )
}

export default Socialmedia;