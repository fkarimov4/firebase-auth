import React from "react";
import { Link } from "react-router-dom";

function Welcome({ user, setUser }) {
    console.log(user)
    return (
        <>
            <h1>Welcome!</h1>
            <h2>{user.displayName || user.email}</h2>
            {user.photoURL && <img src={user.photoURL} alt={'Profile picture of logged-in user'} />}
            <button onClick={() => setUser(false)}>Sign out</button>
        </>
    )
}

export default Welcome