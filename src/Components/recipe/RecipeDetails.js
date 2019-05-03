import React, { Component } from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import moment from "moment";
import { Redirect } from "react-router-dom"


class RecipeDetails extends Component {
  render() {
    const { recipe, auth } = this.props
    if (!auth.uid) {
      return <Redirect to="/login" />
    }
    return (
      <div className="container featured-recipe">
        {recipe ? (
          <div className="card">
            <div className="card-image responsive-img">
              <img className="materialboxed" src="http://lorempixel.com/400/400/food/1" alt="food pic" />
            </div>
            <div className="card-action">
              <h2 className="header">{recipe.recipeName}</h2>
              <p>Created By:
              <span className="red-text"> {recipe.username} </span>
                <span>{moment(recipe.createdAt.toDate()).calendar()}</span>
              </p>
              <p>Difficulty Level: <span>{recipe.difficulty}</span></p>
              <p>Preparation Time: <span>{recipe.prepTime}</span></p>
              <p>Cooking Time: <span>{recipe.cookTime}</span></p>
            </div>
            <div className="card-content">
              <span>Description: </span> {recipe.description}
              <br />
              <br />
              <p>Instructions:</p>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        ) : (
            <div className="container flow-text center">
              <p className="flow-text">Still load... Please wait</p>
            </div >
          )
        }
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  let id = ownProps.match.params.recipeid
  const recipes = state.firestore.data.recipes
  const recipe = recipes ? recipes[id] : null

  return {
    recipe: recipe,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "recipes" }
  ])
)(RecipeDetails);
