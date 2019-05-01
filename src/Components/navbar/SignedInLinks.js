import React from 'react'
import { NavLink } from "react-router-dom"


const SignedInLinks = () => {
  return (
    <div>
      <ul className="right hide-on-med-and-small">
        <li><NavLink to="/recipe/new">New Recipe</NavLink></li>
        <li><NavLink to="/">View My Recipes</NavLink></li>
        <li><NavLink to="/signup">LogOut</NavLink></li>
        <li>
          <NavLink to="/">
            <button href="/" className="btn-floating btn">
              <img src="http://lorempixel.com/40/50/animals/5" alt="pic" />
            </button> Username
          </NavLink>
        </li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul >


    </div >
  )
}

export default SignedInLinks
