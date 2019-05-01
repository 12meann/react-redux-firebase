import React from 'react'
import { Link } from "react-router-dom"


const SignedInLinks = () => {
  return (
    <div>
      <ul className="right hide-on-med-and-small">
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul >


    </div >
  )
}

export default SignedInLinks
