import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //this stops the refresh !!
    //do the login logic..
  };

  const register = (event) => {
    event.preventDefault(); // this stops the refresh!
    // do the register logic
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form action="">
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
            <h5>Password</h5>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
            <button
              onClick={login}
              type="submit"
              className="login__signInButton"
            >
              Sign in
            </button>
          </form>
          <p>By sign-in you agree to Amazon's Conditions.</p>
          <button onClick={register} className="login__signInButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
