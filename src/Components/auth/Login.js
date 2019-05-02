import React, { Component } from "react";
import { connect } from 'react-redux'


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
    console.log(this.state)
  }

  render() {
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
        </form>
      </div>
    );
  }
};

const mapStateToProps = () => {
  return {

  }
}

export default connect(mapStateToProps)(Login);
