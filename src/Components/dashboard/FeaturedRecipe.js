import React from "react";

const FeaturedRecipe = () => {
  return (
    <div>
      <h3 className="header">Recipe of the week</h3>
      <div className="card">
        <div className="card-image">
          <img src="http://lorempixel.com/250/200/food/6" alt="food pic" />
        </div>

        <div className="card-action">
          <span>Easy </span>
          <span>Prep time </span>
          <span>Cook time</span>
        </div>
        <div className="card-content">
          <h2 className="card-title">Recipe name</h2>
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
