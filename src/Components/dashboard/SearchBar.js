import React from "react";

const SearchBar = ({ recipes, handleChange, filteredRecipes, filteredIngredients }) => {


  return (
    <div className="search-bar row">
      <form className="col m12">
        <div className="input-field">
          <input type="text" id={filteredRecipes} placeholder="Search Recipe" onChange={handleChange} />
          <label htmlFor="search-recipe" />
          {/* eslint-disable-next-line */}
          <a href="#">
            <i className="material-icons prefix">search</i>
          </a>
        </div>
        <div className="row difficulty">
          <div className="col m4">
            <label htmlFor="easy">
              <input className="with-gap" id="easy" type="radio" />
              <span>Easy </span>
            </label>
          </div>
          <div className="col m3">
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
        <div className="input-field">
          <input
            type="text"
            id={filteredIngredients}
            placeholder="Search Recipe by Ingredients"
            onChange={handleChange}
          />
          <label htmlFor="search-ingredients" />
          {/* eslint-disable-next-line */}
          <a href="#">
            <i className="material-icons prefix">search</i>
          </a>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
