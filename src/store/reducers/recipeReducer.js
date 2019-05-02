const initState = [
  {
    recipeName: "Ratatouile",
    description: "Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. ",
    instructions: "One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk. Flavor centerpiece plate, delicious ribs bone-in meat, excess chef end. sweet effortlessly pork, low heat smoker soy sauce flavor meat, rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice burgers.",
    difficulty: "easy",
    prepTime: "10 mins",
    cookTime: "1 hour",
    recipeImg: "",
    id: "123"

  },
  {
    recipeName: "Coq au vin",
    description: "Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. ",
    instructions: "One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk. Flavor centerpiece plate, delicious ribs bone-in meat, excess chef end. sweet effortlessly pork, low heat smoker soy sauce flavor meat, rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice burgers.",
    difficulty: "easy",
    prepTime: "10 mins",
    cookTime: "1 hour",
    recipeImg: "",
    id: "567"

  }
]

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