import React from "react";

const ProfileComp=(prop)=>{
    return (
        <div>
            <img src={prop.url}></img>
            <h1>{prop.fname} {prop.lname}</h1>
            <p>Address: {prop.address}</p>
            <p>Phone Number: {prop.phone}</p>
        </div>
    )
}

export default ProfileComp;