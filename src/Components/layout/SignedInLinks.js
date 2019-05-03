import React from 'react'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import { signOut } from "../../store/actions/authActions"


const SignedInLinks = ({ signOut }) => {

  return (
    <div>
      <ul className="right hide-on-med-and-small">
        <li><NavLink to="/recipe/new">New Recipe</NavLink></li>
        <li><NavLink to="/">View My Recipes</NavLink></li>
        <li><a href="/login" onClick={signOut}>LogOut</a></li>
        <li>
          <NavLink to="/">
            <button href="/" className="btn-floating btn">
              <img src="http://lorempixel.com/40/50/animals/5" alt="pic" />
            </button> Username
          </NavLink>
        </li>

      </ul >


    </div >
  )
}


const mapDispatchToProps = dispatch => {
  return {
    signOut: () => { dispatch(signOut()) }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
