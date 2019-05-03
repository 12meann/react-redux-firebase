import React from "react";
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from 'react-redux'


const Navbar = ({ auth }) => {
  console.log(auth);
  return (
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="container">
        <a href="/" className="brand-logo">
          <i className="material-icons large">kitchen</i>
          RecipeMakr
        </a>
        {auth.uid ? (
          <SignedInLinks />
        ) : (
            <SignedOutLinks />
          )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {

  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);
