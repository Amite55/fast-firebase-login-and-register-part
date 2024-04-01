import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>this is your profile</h1>
            <h2>your name : </h2>
            <p>your email : {user.email}</p>
        </div>
    );
};

export default Profile;