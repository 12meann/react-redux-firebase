const initState = {}

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_RECIPE":
      console.log("Succesfully created the recipe");
      return state
    case "CREATE_RECIPE_ERROR":
      console.log("Create recipe error", action.err);
      return state
    case "IMAGE ON FS":
      console.log("image on fs");
      return state
    case "ERROR ON IMAGE FS":
      console.log("error on image fs", action.err);
      return state
    case "DELETE RECIPE":
      console.log("succesfully deleted recipe");
      return {
        ...state
      }
    case "ERROR DELETING RECIPE":
      console.log("err deleting recipe", action.err);
      return state
    case "UPDATE RECIPE":
      console.log("recipe updated");
      return state
    case "ERROR UPDATE":
      console.log("error UPDATING", action.err);
      return state
    default:
      return state
  }
}

export default recipeReducer