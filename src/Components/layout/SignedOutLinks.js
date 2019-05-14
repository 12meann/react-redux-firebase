import React from 'react'
import { Link } from "react-router-dom"


const SignedOutLinks = () => {

  window.$(document).ready(function () {
    window.$('.sidenav').sidenav();
  });

  return (
    <div>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul >


    </div >
  )
}

export default SignedOutLinks
