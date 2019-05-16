import React from "react";

const SearchBar = ({ handleChange }) => {


  return (
    <div className="search-bar row">
      <form className="col m12">
        <div className="input-field">
          <input type="text" id="filteredRecipes" placeholder="Search Recipe" onChange={handleChange} />
          <label htmlFor="filteredRecipes" />
          <button className="link-button">
            <i className="material-icons prefix">search</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
