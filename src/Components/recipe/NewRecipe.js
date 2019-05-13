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
    difficulty: "",
    prepTime: "",
    cookTime: "",
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
    let instructions = [...this.state.instructions]
    ingredients[e.target.dataset.id] = e.target.value
    instructions[e.target.dataset.id] = e.target.value
    this.setState({ ingredients, instructions })
  }

  render() {
    const { auth } = this.props
    let { ingredients, instructions } = this.state
    if (!auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div className="container row center">
        <form className="col s12 m8 offset-m2" onSubmit={this.handleSubmit}>
          <h1 className="header">Create New recipe</h1>
          <div className="input-field">
            <input type="text" onChange={this.handleChange} id="recipeName" />
            <label htmlFor="recipeName">Recipe Name</label>
          </div>
          <div className="input-field">
            <textarea className="materialize-textarea" onChange={this.handleChange} id="description"></textarea>
            <label htmlFor="description">Description</label>
          </div>
          {
            ingredients.map((val, idx) => {
              let ingredientId = `ing-${idx}`
              return (
                <div key={idx}>
                  <label htmlFor={ingredientId}>{`Ingredient #${idx + 1}`}</label>
                  <input
                    type="text"
                    data-id={idx}
                    id={ingredientId}
                    className="ingredient"
                    onChange={this.handleMultiInput}
                  />

                </div>
              )
            })
          }
          <a onClick={this.addIngredient}>Add new Ingredient</a>


          {
            instructions.map((val, idx) => {
              let instructionId = `instruct-${idx}`
              return (
                <div key={idx}>
                  <label htmlFor={instructionId}>{`Instruction #${idx + 1}`}</label>
                  <textarea
                    type="text"
                    data-id={idx}
                    id={instructionId}
                    className="instructions materialize-textarea"
                    onChange={this.handleMultiInput}
                  ></textarea>

                </div>
              )
            })
          }
          <a onClick={this.addInstruction}>Add new Instruction</a>
          <br />
          <div className="row">
            <div className="col s12 m4" >
              <label htmlFor="difficulty"> Level of Difficulty
              <select className="browser-default" defaultValue={'DEFAULT'} id="difficulty" onChange={this.handleChange}>
                  <option value="DEFAULT" disabled>Choose one</option>
                  <option value="easy">Easy</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
            </div>
            <div className="col s12 m4" >
              <label htmlFor="prepTime">Prep Time</label>
              <select className="browser-default" defaultValue={'DEFAULT'} id="prepTime" onChange={this.handleChange}>
                <option value="DEFAULT" disabled>Choose one</option>
                <option value="5 mins">5 mins</option>
                <option value="10 mins">10 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="45 mins">45 mins</option>
                <option value="1 hour">1 hour</option>
                <option value="1.5 hour">1.5 hour</option>
                <option value="2 hours">2 hours</option>
                <option value="more than 2 hours">more than 2 hours</option>
              </select>
            </div>
            <div className="col s12 m4" >
              <label htmlFor="cookTime">Cook Time</label>
              <select className="browser-default" defaultValue={'DEFAULT'} id="cookTime" onChange={this.handleChange}>
                <option value="DEFAULT" disabled>Choose one</option>
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
            </div>
          </div>
          <div className="file-field input-field">

            <div className="btn">
              <span>Upload Recipe Image</span>
              <input type="file" onChange={(e) => { this.displayRecipeImg(e) }} />
            </div>

            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
            <span className="left helper-text red-text">Image file size should be 1 MB or below.</span>
          </div>

          <PreviewImg recipeImgUrl={this.state.recipeImgUrl} />

          <div>
            <button type="submit" className="btn light-blue accent-4">Submit Recipe</button>
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
