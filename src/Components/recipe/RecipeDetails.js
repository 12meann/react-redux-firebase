import React from "react";

const FeaturedRecipe = () => {
  return (
    <div className="container featured-recipe">

      <div className="card">
        <div className="card-image responsive-img">
          <img className="materialboxed" src="http://lorempixel.com/800/800/food/1" alt="food pic" />
        </div>
        <div className="card-action">
          <h2 className="header">Recipe name</h2>
          <p>Created By <span className="red-text">stomach_filler </span> </p>
          <span>Easy </span>
          <span>Prep time </span>
          <span>Cook time</span>
        </div>
        <div className="card-content">

          <p>Description</p>
          <p>Instructions</p>
          <ol>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, unde!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, unde!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, unde!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, unde!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, unde!
            </li>
          </ol>
        </div>
      </div>

    </div>
  );
};

export default FeaturedRecipe;
