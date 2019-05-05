import React, { Component } from 'react'
import M from 'materialize-css';
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import { signOut } from "../../store/actions/authActions"
import $ from 'jquery';



class SignedInLinks extends Component {

  componentDidMount() {
    M.Dropdown.init(this.dropdown);


  }
  render() {
    const { signOut } = this.props

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
                {/* if no pic use initials using profile props */}
              </button> Username
            </NavLink>
          </li>
          <li>
            {/* Dropdown Trigger  */}
            <a className={this.props.classes} ref={(dropdown) => { this.dropdown = dropdown }}
              id={this.props.id} data-target='dropdown1'><i className="material-icons">more_vert</i></a>

            {/* Dropdown Structure */}
            <ul id='dropdown1' className='dropdown-content'>
              <li><a href="#!">My recipes</a></li>
              <li><a href="#!">Pinned Recipes</a></li>
              <li className="divider" tabIndex="-1"></li>
              <li><a href="#!">My profile</a></li>
              <li><a href="#!">Logout</a></li>

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
