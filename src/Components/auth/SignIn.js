import React from "react";

const SignIn = () => {
  return (
    <div>
      <form>
        <div className="input-field">
          <label htmlFor="email" />
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password" />
          <input type="password" placeholder="Password" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
