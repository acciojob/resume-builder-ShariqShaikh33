import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Socialmedia=()=>{
    return(
        <>
            <h1>SocialMedia</h1>
            <form>
                <input type="url" id="Social" name="Social" placeholder="Social Links*" required></input>
            </form>

            
            <Navigation prevPath="/social" nextPath="/final"/>

        </>
    )
}

export default Socialmedia;