import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../ConnectAuth'

function Signup({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleFormSubmit = (event) => {
      event.preventDefault()
      const auth = getAuth(app)
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
          setUser(result.user)
          navigate('/') 
      })
      .catch(alert)
    }
  return (
    <>
      <h1>Signup</h1>
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
        <input type="submit" value="Sign Up" />
      </form>
      <p>
        Already a user? <Link to="/login">Log In</Link>
      </p>
    </>
  );
}

export default Signup;
