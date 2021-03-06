import React, { Component } from "react";
import { connect } from 'react-redux'
import { logIn } from "../../store/actions/authActions"
import { Redirect } from "react-router-dom"



class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.logIn(this.state)
    this.props.history.push("/")
  }

  render() {
    const { authError, auth } = this.props
    if (auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div className="row">
        <form className="container center col s12 m6 offset-m3" onSubmit={this.handleSubmit}>
          <h1 className="header">Login</h1>
          <div className="input-field">
            <input type="email" id="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <button type="submit" className="btn light-blue accent-4">LOGIN</button>
          </div>
          <div className="center red-text">
            {authError ? <p className="flow-text">{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: credentials => { dispatch(logIn(credentials)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
