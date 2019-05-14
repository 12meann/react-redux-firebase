import React, { Component } from "react";
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"
import { signOut } from "../../store/actions/authActions"


class Navbar extends Component {
  render() {
    const { auth, profile, signOut } = this.props

    window.$(document).ready(function () {
      window.$('.sidenav').sidenav();
    });
    return (
      <header>
        <nav className="nav-wrapper blue-grey darken-4">
          <div className="container">
            <a href="/" className="brand-logo">
              <i className="material-icons large">kitchen</i>
              RecipeMakr
          </a>
            <button data-target="mobile-demo" className="sidenav-trigger link-button"><i className="material-icons">menu</i></button>
            {auth.uid ? (
              <SignedInLinks profile={profile} />
            ) : (
                <SignedOutLinks />
              )}
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          {auth.uid ? (
            <div>
              <li><NavLink to="/">{profile.username}</NavLink></li>
              <li><div className="divider" tabIndex="-1"></div></li>
              <li><NavLink to="/recipe/new">Create Recipe</NavLink></li>
              <li><NavLink to="/">My Recipes</NavLink></li>
              <li><a href="#!">Pinned Recipes</a></li>
              <li><div className="divider" tabIndex="-1"></div></li>
              <li><a href="#!">Edit profile</a></li>
              <li><NavLink to="/login" onClick={signOut}>LogOut</NavLink></li>
            </div>
          ) : (
              <div>
                <li><NavLink to="/login">Log In</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
              </div>
            )}

        </ul>
      </header>
    );
  }
};



const mapStateToProps = state => {

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => { dispatch(signOut()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
