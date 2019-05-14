import React, { Component } from "react";
import { connect } from 'react-redux'
import { createRecipe } from "../../store/actions/recipeActions"
import { Redirect } from "react-router-dom"
import PreviewImg from "./PreviewImg";
import { capitalize } from "../../ownFunction/otherFunc"


class NewRecipe extends Component {
  state = {
    recipeName: "",
    description: "",
    ingredients: [{}],
    instructions: [{}],
    difficulty: "Easy",
    prepTime: "10 mins",
    cookTime: "30 mins",
    recipeImg: null,
    recipeImgUrl: "http://via.placeholder.com/640x360"
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: capitalize(e.target.value),
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.createRecipe(this.state)
    this.props.history.push("/")
    console.log(this.state)
  }
  displayRecipeImg = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file)
    reader.onloadend = () => {
      this.setState({
        recipeImg: file,
        recipeImgUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  addIngredient = (e) => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, {}]
    }));
    console.log(this.state.ingredients)
  }

  addInstruction = (e) => {
    this.setState((prevState) => ({
      instructions: [...prevState.instructions, {}]
    }));
    console.log(this.state.instructions)
  }

  handleMultiInput = e => {
    let ingredients = [...this.state.ingredients]

    ingredients[e.target.dataset.id] = capitalize(e.target.value)

    this.setState({ ingredients })
  }
  handleMultiInput1 = e => {

    let instructions = [...this.state.instructions]

    instructions[e.target.dataset.id] = capitalize(e.target.value)
    this.setState({ instructions })
  }

  removeIngredient = index => {
    let { ingredients } = this.state
    ingredients.splice(index, 1)
    this.setState({
      ingredients: this.state.ingredients,
    })
  }
  removeInstruction = index => {
    let { instructions } = this.state
    instructions.splice(index, 1)
    this.setState({
      instructions: this.state.instructions
    })
  }
  render() {
    const { auth } = this.props
    let { ingredients, instructions } = this.state
    if (!auth.uid) {
      return <Redirect to="/" />
    }

    window.$(document).ready(function () {
      window.$('select').formSelect();
    });

    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <h1 className="header center">Create New recipe</h1>
          <div className="col s12 m4 offset-m1">
            <div className="input-field">
              <input type="text" onChange={this.handleChange} id="recipeName" required />
              <label htmlFor="recipeName">Recipe Name</label>
            </div>
            <div className="input-field">
              <textarea className="materialize-textarea" onChange={this.handleChange} id="description" required></textarea>
              <label htmlFor="description">Description</label>
            </div>

            <br />
            <div className="row">
              <div className="input-field col s12 m4" >
                <select value={this.state.difficulty} id="difficulty" onChange={this.handleChange}>
                  <option>Easy</option>
                  <option>Intermediate</option>
                  <option>Hard</option>
                </select>
                <label htmlFor="difficulty"> Level of Difficulty </label>
              </div>

              <div className="input-field col s12 m4" >
                <select value={this.state.prepTime} id="prepTime" onChange={this.handleChange}>
                  <option>5 mins</option>
                  <option>10 mins</option>
                  <option>30 mins</option>
                  <option>45 mins</option>
                  <option>1 hour</option>
                  <option>1.5 hour</option>
                  <option>2 hours</option>
                  <option>more than 2 hours</option>
                </select>
                <label htmlFor="prepTime">Prep Time</label>
              </div>

              <div className="input-field col s12 m4" >
                <select value={this.state.cookTime} id="cookTime" onChange={this.handleChange}>
                  <option>No cooking needed</option>
                  <option>10 mins</option>
                  <option>30 mins</option>
                  <option>45 mins</option>
                  <option>1 hour</option>
                  <option>1.5 hour</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>8 hours</option>
                  <option>more than 8 hours</option>
                </select>
                <label htmlFor="cookTime">Cook Time</label>
              </div>
            </div>
            <div className="file-field input-field">

              <div className="btn right">
                <span>Add Recipe Image</span>
                <input type="file" onChange={(e) => { this.displayRecipeImg(e) }} required />
              </div>

              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>


              <span className="left helper-text red-text">Image file size should be 1 MB or below.</span>
            </div>

            <PreviewImg recipeImgUrl={this.state.recipeImgUrl} />
          </div>
          <div className="col s12 m5 offset-m1">
            <h5>Ingredients:</h5>
            {
              ingredients.map((val, idx) => {
                let ingredientId = `ing-${idx}`
                return (
                  <div key={idx} className="row">

                    <div className="input-field col s12 m12 row">
                      <input
                        type="text"
                        data-id={idx}
                        id={ingredientId}
                        className="ingredient col s10 m10"
                        onChange={this.handleMultiInput}
                        required
                      />
                      <label htmlFor={ingredientId}>{`Ingredient #${idx + 1}`}</label>
                      <button type="button" className="btn-floating red-text" onClick={this.removeIngredient}><i className="material-icons">remove </i></button>

                      <button type="button" className="btn-floating" onClick={this.addIngredient}><i className="material-icons"> add</i></button>
                    </div>
                  </div>
                )
              })
            }

            <h5>Instructions:</h5>

            {
              instructions.map((val, idx) => {
                let instructionId = `instruct-${idx}`
                return (
                  <div key={idx} className="row">

                    <div className="input-field col s12 m12 row">
                      <textarea
                        type="text"
                        data-id={idx}
                        id={instructionId}
                        className="instructions materialize-textarea col s10 m10"
                        onChange={this.handleMultiInput1}
                        required
                      ></textarea>
                      <label htmlFor={instructionId}>{`Instruction #${idx + 1}`}</label>
                      <div>
                        <button type="button" className="btn-floating" onClick={this.removeInstruction}><i className="material-icons">remove</i></button>
                        <button type="button"
                          className="btn-floating"
                          onClick={this.addInstruction}>
                          <i className="material-icons">add</i>
                        </button>
                      </div>

                    </div>
                  </div>
                )
              })
            }



            <div className="center">
              <button type="submit" className="btn light-blue accent-4 btn-large">Submit Recipe</button>
            </div>
            {/* end of row */}
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {

  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {

  return {
    createRecipe: recipe => { dispatch(createRecipe(recipe)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
