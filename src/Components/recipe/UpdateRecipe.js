import React, { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { capitalize } from "../../ownFunction/otherFunc"
import { updateRecipe } from "../../store/actions/recipeActions"

class EditRecipe extends Component {
  state = {
    recipeName: "",
    description: "",
    instructions: "",
    difficulty: "",
    prepTime: "",
    cookTime: "",
    recipeImg: null,
    recipeImgUrl: "http://via.placeholder.com/640x360"
  }

  componentDidMount() {
    const { recipe } = this.props
    this.setState({
      recipeName: recipe.recipeName,
      description: recipe.description,
      instructions: recipe.instructions,
      difficulty: recipe.difficulty,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      recipeImg: recipe.recipeImg,
      recipeImgUrl: recipe.recipeImgUrl
    })

  }


  handleChange = e => {
    this.setState({
      [e.target.id]: capitalize(e.target.value)
    })

  }
  handleUpdate = e => {
    let recipeId = this.props.match.params.recipeid
    e.preventDefault();
    this.props.updateRecipe(recipeId, this.state)
    this.props.history.push("/")
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
  render() {
    const { auth, recipe } = this.props

    if (!auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div className="container row center">
        <form className="col s12 m8 offset-m2" onSubmit={this.handleUpdate}>
          <h1 className="header">Edit {recipe.recipeName}</h1>
          <div className="input-field">
            <input type="text" onChange={this.handleChange} id="recipeName" value={this.state.recipeName} />
            <label className="active" htmlFor="recipeName">Recipe Name</label>
          </div>
          <div className="input-field">
            <textarea className="materialize-textarea" onChange={this.handleChange} id="description" value={this.state.description}></textarea>
            <label className="active" htmlFor="description">Description</label>
          </div>
          <div className="input-field">
            <textarea className="materialize-textarea" onChange={this.handleChange} id="instructions" value={this.state.instructions} ></textarea>
            <label className="active" htmlFor="instructions">Instructions</label>
          </div>
          <br />
          {console.log(this.state.difficulty)}
          <div className="row">
            <div className="col s12 m4" >
              <label htmlFor="difficulty"> Level of Difficulty </label>
              <select className="browser-default" id="difficulty" onChange={this.handleChange} defaultValue={this.state.difficulty} >
                <option value="DEFAULT" disabled>Choose one</option>
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="hard">Hard</option>
              </select>

            </div>
            <div className="col s12 m4" >
              <label htmlFor="prepTime">Prep Time</label>
              <select className="browser-default" id="prepTime" onChange={this.handleChange} value={this.state.prepTime}>
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
              <select className="browser-default" id="cookTime" onChange={this.handleChange} value={this.state.cookTime}>
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
            <span className="left helper-text orange-text">Image file size should be 1 MB or below.</span>
          </div>

          <div className="card image-url z-depth-0 ">
            <img className="card-image responsive-img" src={recipe.recipeImg} alt="recipe" />
          </div>
          <div>
            <button type="submit" className="btn light-blue accent-4">Update Recipe</button>
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {

  let id = ownProps.match.params.recipeid
  const recipes = state.firestore.data.recipes
  const recipe = recipes ? recipes[id] : null


  return {
    recipe: recipe,
    auth: state.firebase.auth

  }
}

const mapDispatchToProps = dispatch => {

  return {

    updateRecipe: (recipeId, updatedRecipe) => { dispatch(updateRecipe(recipeId, updatedRecipe)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);
