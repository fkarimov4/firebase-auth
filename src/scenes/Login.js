import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <p>
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}

export default Login;
