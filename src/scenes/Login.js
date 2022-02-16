import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";

function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const localUser = localStorage.getItem("displayName");

    if (localUser) {
        setUser(localUser)
    }

  }, []);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("displayName", result.user.displayName);
        localStorage.setItem("profilePhoto", result.user.photoURL)
        navigate('/')
      })


      .catch(alert);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);

        navigate("/");
      })
      .catch(alert);
  };

  return (
    <>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
      <button
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          padding: "5px 20px",
          margin: "10px 0",
        }}
      >
        Sign in with Google
      </button>
      <p>
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}

export default Login;
