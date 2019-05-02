export const createRecipe = recipe => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();

    firestore.collection("recipes").add({
      ...recipe,
      authorFirstName: "Mikhaela",
      authorLastName: "Johnson",
      initials: "MJ",
      username: "thefattykid",
      authorId: "123",
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_RECIPE" })
    }).catch(err => {
      dispatch({ type: "CREATE_RECIPE_ERROR", err })
    })



  }
}