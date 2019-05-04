import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { signUp } from "../../store/actions/authActions"


class SignUp extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);

  }

  render() {
    const { auth, authError } = this.props
    if (auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div className="container row center">
        <form className="col s12 m6 offset-m3" onSubmit={this.handleSubmit}>

          <h1 className="header">Sign Up</h1>
          <div className="input-field">
            <input type="email" id="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <input type="text" id="username" onChange={this.handleChange} />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field">
            <input type="text" id="firstName" onChange={this.handleChange} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="lastName" onChange={this.handleChange} />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div>
            <button type="submit" className="btn light-blue accent-4">SIGN UP</button>
            {authError ? (<p className="flow-text">{authError}</p>) : (null)}
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => { dispatch(signUp(newUser)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
