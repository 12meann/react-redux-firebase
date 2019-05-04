export const createRecipe = recipe => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    firestore.collection("recipes").add({
      ...recipe,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      initials: profile.firstName[0] + profile.lastName[0],
      username: profile.username,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_RECIPE" })
    }).catch(err => {
      dispatch({ type: "CREATE_RECIPE_ERROR", err })
    })
  }
}