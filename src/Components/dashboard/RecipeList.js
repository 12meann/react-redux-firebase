import React, { Component } from "react";



class RecipeList extends Component {


  render() {

    const { recipes } = this.props
    const recipeItems = recipes ? (
      recipes.map(recipe => {
        return (
          <div className="card horizontal" key={recipe.id}>
            <div className="card-image" >
              <img src="http://lorempixel.com/400/200/food/8/" alt="food pic" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h2 className="flow-text">{recipe.recipeName}</h2>
                <p className="truncate">{recipe.description}</p>
              </div>
              <div className="card-action">
                <span>{recipe.difficulty}</span>
                <span>{recipe.prepTime}</span>
                <span>{recipe.cookTime}</span>
              </div>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center flow-text">No recipes at the moment.</div>
      )

    return (

      <div className="container recipe-list">
        {recipeItems}



      </div>
    );
  }
}


export default RecipeList
