import React, { Component } from "react";
import RecipeList from "./RecipeList";
import FeaturedRecipe from "./FeaturedRecipe";
import SearchBar from "./SearchBar";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m7">
          <RecipeList />
        </div>
        <div className="col s12 m3 offset-m1">
          <SearchBar />
          <FeaturedRecipe />
        </div>
      </div>
    );
  }
}

export default Dashboard;
