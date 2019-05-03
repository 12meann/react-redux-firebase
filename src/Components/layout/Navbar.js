import React from "react";
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from 'react-redux'


const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="container">

        <a href="/" className="brand-logo">
          <i className="material-icons large">kitchen</i>
          RecipeMakr
        </a>

        <SignedInLinks />
        <SignedOutLinks />


      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Navbar);
