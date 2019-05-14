import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer className="page-footer blue-grey darken-4">

        <ul className="center">
          <li><Link to="/" className="grey-text text-lighten-3" href="#!"> Home </Link></li>
          <li><Link to="/about" className="grey-text text-lighten-3" href="#!"> About </Link></li>
          <li><Link to="/contact" className="grey-text text-lighten-3" href="#!"> Contact</Link></li>
        </ul>

        <div className="container copyright">
          <p className="center">  © 2019 Copyright Recipe Makr </p>
        </div>
      </footer>

    </div>
  )
}

export default Footer
