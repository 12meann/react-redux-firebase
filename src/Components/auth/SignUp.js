import React from "react";

const SignUp = () => {
  return (
    <div className="container row center">
      <form className="col s12 m6 offset-m3">

        <h1 className="header">Sign Up</h1>
        <div className="input-field">
          <label htmlFor="email" />
          <input type="email" placeholder="Email" id="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password" />
          <input type="password" placeholder="Password" id="password" />
        </div>
        <div className="input-field">
          <label htmlFor="username" />
          <input type="text" placeholder="username" id="username" />
        </div>
        <div className="input-field">
          <label htmlFor="firstname" />
          <input type="text" placeholder="firstname" id="firstName" />
        </div>
        <div className="input-field">
          <label htmlFor="lastname" />
          <input type="text" placeholder="lastname" id="lastName" />
        </div>
        <div>
          <button type="submit" className="btn light-blue accent-4">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
