import React, { Component } from "react";
import Dashboard from "./Components/dashboard/Dashboard";
import Footer from "./Components/dashboard/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Dashboard />

        <Footer />
      </div>
    );
  }
}

export default App;
