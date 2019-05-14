import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase"

class MyRecipes extends Component {

  render() {
    const { recipes, auth } = this.props
    const myRecipeList = recipes ? (recipes.map(recipe => {
      console.log(recipe)
      return (
        auth.uid === recipe.authorId ? (
          <div className="my-recipe">
            <div>{recipe.name}</div>
          </div>
        ) : (
            <div className="container center">You don't have created any recipes yet. Go create one!</div>
          )
      )
    })) : (
        <div className="container center flow-text">Still loading... Please wait.</div>
      )
    return (
      <div>
        {myRecipeList}
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    auth: state.firebase.auth,
    recipes: state.firestore.ordered.recipes,
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "recipes", orderBy: ["createdAt", "desc"], limit: 10 }
  ])
)(MyRecipes);


