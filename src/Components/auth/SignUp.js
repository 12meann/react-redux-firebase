import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'


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
    console.log(this.state);

  }

  render() {
    const { auth } = this.props
    if (auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div className="container row center">
        <form className="col s12 m6 offset-m3" onSubmit={this.handleSubmit}>

          <h1 className="header">Sign Up</h1>
          <div className="input-field">
            <label htmlFor="email" />
            <input type="email" placeholder="Email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password" />
            <input type="password" placeholder="Password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="username" />
            <input type="text" placeholder="username" id="username" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname" />
            <input type="text" placeholder="firstname" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname" />
            <input type="text" placeholder="lastname" id="lastName" onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit" className="btn light-blue accent-4">LOGIN</button>
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(SignUp);
