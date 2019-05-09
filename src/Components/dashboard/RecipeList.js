import React from "react";
import { Link } from "react-router-dom"
import moment from "moment"



const RecipeList = ({ recipes }) => {

  window.$(document).ready(function () {
    window.$('.materialboxed').materialbox();
  });
  const recipeItems = recipes ? (
    recipes.map(recipe => {

      return (

        <div className="card horizontal" key={recipe.id}>
          <div className="card-image" >
            <img src={recipe.recipeImg} className="responsive-img materialboxed" alt="food pic" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <Link to={"/recipe/" + recipe.id}>
                <h3 className="flow-text">{recipe.recipeName}</h3>
              </Link>
              by: <span className="blue-text"> {recipe.username} </span>
              <br />
              <span className="time"> published {moment(recipe.createdAt.toDate()).calendar()} </span>
              <br />
              <p className="desc">{recipe.description.length > 75 ? (`${recipe.description.substr(0, 75)}...`) : (`${recipe.description.substr(0, 50)}`)}</p>
              <br />
              <span>Difficulty Level: {recipe.difficulty}</span> <br />
              <span>Prep Time: {recipe.prepTime}</span> <br />
              <span>Cooking Time: {recipe.cookTime}</span>
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

export default RecipeList
