import React from "react";





const FeaturedRecipe = ({ recipes }) => {
  const item = recipes ? (recipes.map(recipe => {
    let random = Math.floor(Math.random() * (recipes.length - 1))
    const featureRecipe = recipes[random].id.slice(1)
    console.log(featureRecipe);
    return (
      <div>
        < h3 className="header" > Recipe of the week</h3>
        <div className="card">
          <div className="card-image">
            <img src="http://lorempixel.com/250/200/food/6" alt="food pic" />
          </div>
          <div className="card-action">
            <span>easy </span>
            <span>Prep time </span>
            <span>Cook time</span>
          </div>
          <div className="card-content">
            <h2 className="card-title">recipe name</h2>
            <p>Description</p>
            <p>Instructions</p>
          </div>
        </div>
      </div>
    )
  })) : (null)

  return (
    <div>
      {item}
    </div>
  );
}
export default FeaturedRecipe;
