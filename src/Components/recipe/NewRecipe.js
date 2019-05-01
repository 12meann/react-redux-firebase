import React from "react";

const NewRecipe = () => {
  return (
    <div className="container row center">
      <form className="col s12 m6 offset-m3">

        <h1 className="header">Create New recipe</h1>
        <div className="input-field">
          <label htmlFor="recipeName" />
          <input type="text" placeholder="Recipe Name" id="recipeName" />
        </div>
        <div className="input-field">
          <label htmlFor="description" />
          <textarea className="materialize-textarea" id="description" placeholder="Description"></textarea>
        </div>
        <div className="input-field row">
          <div className="col s12 m10">
            <label htmlFor="instructions" />
            <textarea className="materialize-textarea" id="instructions" placeholder="Instructions (click add button to add instructions)"></textarea>
          </div>
          <div className="col s12 m2">
            <a href="/" className="btn btn-floating circle prefix"><i className="material-icons">add</i></a>
          </div>
        </div>
        <div className="row difficulty" id="difficulty">
          <div className="col m4">
            <label htmlFor="easy">
              <input className="with-gap" id="easy" type="radio" />
              <span>Easy </span>
            </label>
          </div>
          <div className="col m2">
            <label htmlFor="intermediate">
              <input className="with-gap" id="intermediate" type="radio" />
              <span>Intermediate </span>
            </label>
          </div>
          <div className="col m4 offset-m1">
            <label htmlFor="hard">
              <input className="with-gap" id="hard" type="radio" />
              <span>Hard </span>
            </label>
          </div>
        </div>
        <div className="input-field row">
          <div className="col s12 m5" >
            <select id="prepTime">
              <option value="" disabled selected>Prep Time</option>
              <option value="10 mins">10 mins</option>
              <option value="30 mins">30 mins</option>
              <option value="45 mins">45 mins</option>
              <option value="1 hour">1 hour</option>
              <option value="1.5 hour">1.5 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="more than 2 hours">more than 2 hours</option>
            </select>
            <label htmlFor="prepTime"></label>
          </div>
          <div className="col s12 m5" >
            <select id="cookTime">
              <option value="" disabled selected>Cook Time</option>
              <option value="10 mins">10 mins</option>
              <option value="30 mins">30 mins</option>
              <option value="45 mins">45 mins</option>
              <option value="1 hour">1 hour</option>
              <option value="1.5 hour">1.5 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="3 hours">3 hours</option>
              <option value="8 hours">8 hours</option>
              <option value="more than 8 hours">more than 8 hours</option>
            </select>
            <label htmlFor="cookTime"></label>
          </div>

        </div>
        <div className="file-field input-field row">

          <div className="file-path-wrapper col s12 m8">
            <input className="file-path validate" type="text" />
          </div>
          <div className="btn col s12 m4">
            <span>Upload Image URL</span>
            <input type="file" id="recipeImg" />
          </div>
        </div>
        <div>
          <button type="submit" className="btn light-blue accent-4">Submit Recipe</button>

        </div>
      </form>
    </div>
  );
};

export default NewRecipe;
