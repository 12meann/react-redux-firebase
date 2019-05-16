import React, { Component } from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import moment from "moment";
import { Redirect, Link } from "react-router-dom"
import { deleteRecipe } from "../../store/actions/recipeActions"





class RecipeDetails extends Component {

  render() {

    window.$(document).ready(function () {
      window.$('.materialboxed').materialbox();
    });

    const { recipe, auth, deleteRecipe } = this.props

    let recipeId = this.props.match.params.recipeid
    if (!auth.uid) {
      return <Redirect to="/login" />
    }
    return (
      <div className="container featured-recipe">
        {recipe ? (
          <div className="card">
            <div className="card-image responsive-img">
              <img className="materialboxed"
                src={recipe.recipeImg} alt="food pic" />
            </div>
            <div className="card-action">
              <h2 className="header">{recipe.recipeName}</h2>
              <p>Created By:
              <span className="red-text"> {recipe.username} </span>
                <span className="time">{recipe.createdAt ? moment(recipe.createdAt.toDate()).calendar() : null}</span>
                <br />
                {recipe.updatedAt ? <span className="time">Updated {moment(recipe.updatedAt.toDate()).calendar()} </span> : null}
              </p>
              <p>Difficulty Level: <span>{recipe.difficulty}</span></p>
              <p>Preparation Time: <span>{recipe.prepTime}</span></p>
              <p>Cooking Time: <span>{recipe.cookTime}</span></p>
            </div>
            <div className="card-content">
              <span>Description: </span> {recipe.description}
              <br />
              <br />
              <p>Ingredients:</p>
              <ul className="browser-default">
                {
                  recipe.ingredients.map(ingredient => {
                    return (
                      <li>{ingredient}</li>
                    )
                  })
                }
              </ul>
              <p>Instructions:</p>
              <ol>
                {recipe.instructions.map(instruction => {
                  return (
                    <li>{instruction}</li>
                  )

                })}
              </ol>
              {auth.uid === recipe.authorId ? (
                <div>
                  <Link to={"/recipe/" + recipeId + "/edit"} className="btn yellow">Edit Recipe</Link>
                  <button onClick={() => deleteRecipe(recipeId)} className="btn red">Delete Recipe</button>
                </div>
              ) : (null)}
            </div>
          </div>
        ) : (
            <div className="container flow-text center">
              <p className="flow-text">Still loading... Please wait</p>
            </div >
          )
        }
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {

  let id = ownProps.match.params.recipeid
  const recipes = state.firestore.data.recipes
  const recipe = recipes ? recipes[id] : null
  return {
    recipe: recipe,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRecipe: (recipeid) => { dispatch(deleteRecipe(recipeid)) },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: "recipes" }
  ])
)(RecipeDetails);


