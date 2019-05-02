import React, { Component } from "react";
import RecipeList from "./RecipeList";
import FeaturedRecipe from "./FeaturedRecipe";
import SearchBar from "./SearchBar";
import { compose } from "redux";
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase"



class Dashboard extends Component {
  render() {

    const { recipes } = this.props
    return (
      <div className="row">
        <div className="col s12 m7">
          <RecipeList recipes={recipes} />
        </div>
        <div className="col s12 m3 offset-m1">
          <SearchBar />
          <FeaturedRecipe />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {


  return {
    recipes: state.firestore.ordered.recipes
  }

}

export default compose(connect(mapStateToProps),
  firestoreConnect([
    { collection: "recipes" }
  ])
)(Dashboard);
