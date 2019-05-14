import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import { signOut } from "../../store/actions/authActions"

class SignedInLinks extends Component {



  render() {
    const { signOut, profile } = this.props
    window.$(document).ready(function () {
      window.$('.sidenav').sidenav();
      window.$('.dropdown-trigger').dropdown(
        { constrainWidth: false }
      );
    });
    return (
      <div>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/recipe/new">Create Recipe</NavLink></li>
          <li>
            <NavLink to="/">
              <img className="btn-floating" src="http://lorempixel.com/40/50/animals/5" alt="pic" />
              {/* if no pic use initials using profile props */}
              <button className="link-button">{profile.username}</button>
            </NavLink>
          </li>
          <li>
            {/* Dropdown Trigger  */}
            <button className="link-button dropdown-trigger"
              data-target='dropdown1'><i className="material-icons">more_vert</i></button>

            {/* Dropdown Structure */}
            <ul id='dropdown1' className='dropdown-content'>
              <li><NavLink to="/recipe/myrecipes">My Recipes</NavLink></li>
              <li><a href="#!">Pinned Recipes</a></li>
              <li className="divider" tabIndex="-1"></li>
              <li><a href="#!">My profile</a></li>
              <li><NavLink to="/login" onClick={signOut}>LogOut</NavLink></li>
            </ul>
          </li>
        </ul >


      </div >
    )
  }

}


const mapDispatchToProps = dispatch => {
  return {
    signOut: () => { dispatch(signOut()) }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
