import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Welcome({ user, setUser }) {
  const auth = getAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
      signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/login");
    })
    .catch(console.error())
  };

  return (
    <>
      <h1>Welcome!</h1>
      <h2>{localStorage.getItem("displayName") || user.email}</h2>
      {localStorage.getItem("profilePhoto") && (
        <img
          src={localStorage.getItem("profilePhoto")}
          alt={"Profile picture of logged-in user"}
        />
      )}
      <button onClick={handleLogout}>Sign out</button>
    </>
  );
}

export default Welcome;
