const initState = {}

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_RECIPE":
      console.log("Succesfully created the recipe");
      return state
    case "CREATE_RECIPE_ERROR":
      console.log("Create recipe error");
      return state
    default:
      return state
  }
}

export default recipeReducer