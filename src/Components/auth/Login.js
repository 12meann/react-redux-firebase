import React from "react";

const SignIn = () => {
  return (
    <div className="container row  center">
      <form className="col s12 m6 offset-m3">
        <h1 className="header">Login</h1>
        <div className="input-field">
          <label htmlFor="email" />
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password" />
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button type="submit" className="btn light-blue accent-4">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
