import React, { Component } from "react";

class RecipeList extends Component {
  render() {
    return (
      <div className="container recipe-list">
        <div className="card horizontal">
          <div className="card-image">
            <img src="http://lorempixel.com/250/200/food/" alt="food pic" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h2 className="flow-text">Recipe name</h2>
              <p className="truncate">Description</p>
            </div>
            <div className="card-action">
              <span>Easy</span>
              <span>Prep time</span>
              <span>Cook time</span>
            </div>
          </div>
        </div>

        <div className="card horizontal">
          <div className="card-image">
            <img src="http://lorempixel.com/250/200/food/8" alt="food pic" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h2 className="flow-text">Recipe name</h2>
              <p className="truncate">Description</p>
            </div>
            <div className="card-action">
              <span>Easy</span>
              <span>Prep time</span>
              <span>Cook time</span>
            </div>
          </div>
        </div>

        <div className="card horizontal">
          <div className="card-image">
            <img src="http://lorempixel.com/250/200/food/3" alt="food pic" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="flow-text">Recipe name</div>
              <p className="truncate">Description</p>
            </div>
            <div className="card-action">
              <span>Easy</span>
              <span>Prep time</span>
              <span>Cook time</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeList;
