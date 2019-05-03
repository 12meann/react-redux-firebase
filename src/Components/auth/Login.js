import React, { Component } from "react";
import { connect } from 'react-redux'
import { logIn } from "../../store/actions/authActions"


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
  }

  render() {
    const { authError } = this.props

    return (
      <div className="container row  center">
        <form className="col s12 m6 offset-m3" onSubmit={this.handleSubmit}>
          <h1 className="header">Login</h1>
          <div className="input-field">
            <label htmlFor="email" />
            <input type="email" placeholder="Email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password" />
            <input type="password" placeholder="Password" id="password" onChange={this.handleChange} />
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
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: credentials => { dispatch(logIn(credentials)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
