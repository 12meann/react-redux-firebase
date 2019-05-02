export const createRecipe = recipe => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore()

    firestore.collection("recipes").add({
      ...recipe,
      recipeName: "Bouillabase",
      description: "A nice smelling food to the bones",
      instructions: "prepare everything",
      difficulty: "hard",
      prepTime: "2 hours",
      cookTime: "10 hours",
      id: "123",
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_RECIPE" })
    }).catch(err => {
      dispatch({ type: "CREATE_RECIPE_ERROR", err })
    })



  }
}