import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/auth/Login"
import SignUp from "./Components/auth/SignUp"
import About from "./Components/pages/About"
import Contact from "./Components/pages/Contact"
import Footer from "./Components/dashboard/Footer"
import Navbar from "./Components/layout/Navbar"
import NewRecipe from "./Components/recipe/NewRecipe"
import RecipeDetails from "./Components/recipe/RecipeDetails"
import UpdateRecipe from "./Components/recipe/UpdateRecipe"
import MyRecipes from "./Components/recipe/MyRecipes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/recipe/new" component={NewRecipe} />
            <Route exact path="/recipe/myrecipes" component={MyRecipes} />
            <Route exact path="/recipe/:recipeid/edit" component={UpdateRecipe} />
            <Route exact path="/recipe/:recipeid" component={RecipeDetails} />


          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
