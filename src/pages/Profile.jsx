import React from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileState } from "../store/Reducers/profileSlice";

const Profile=()=>{
    // const fname = useSelector(state=> state.Profile.fname);
    const dispatch = useDispatch();
    const profile = useSelector(state=>state.profile)
    const handleChange=(e)=>{
        dispatch(updateProfileState({ ...profile, [e.target.name]: e.target.value}))
    }

    return(
        <div>
            <p>Add your profile details</p>
            <form>
                <input type="text" id="fname" name="fname" placeholder="First Name" onChange={handleChange} required></input>
                <input type="text" id="lname" name="lname" placeholder="Last Name" onChange={handleChange} required></input>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" onChange={handleChange} required></input>
                <input type="text" id="address" name="address" placeholder="Address" onChange={handleChange} required></input>
                <input type="file" id="url" name="url" placeholder="First Name" onChange={handleChange} required></input>
            </form>


            <h1>Profile</h1>
            <Navigation prevPath="/final" nextPath="/education"/>

        </div>
    )
}

export default Profile;