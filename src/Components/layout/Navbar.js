import React from "react";
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from 'react-redux'


const Navbar = ({ auth, profile }) => {

  return (
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="container">
        <a href="/" className="brand-logo">
          <i className="material-icons large">kitchen</i>
          RecipeMakr
        </a>
        {auth.uid ? (
          <SignedInLinks profile={profile} />
        ) : (
            <SignedOutLinks />
          )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
