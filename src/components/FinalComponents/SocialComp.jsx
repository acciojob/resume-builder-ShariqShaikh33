import React from "react";

const SocialComp=(prop)=>{
    return (
        <div>
            <a href={prop.social}>{prop.social}</a>
        </div>
    )
}

export default SocialComp;