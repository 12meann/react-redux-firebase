import { storage } from "../../config/fbConfig"



export const createRecipe = recipe => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    const recipeImg = recipe.recipeImg
    const storageRef = storage.ref().child(`/recipeImg/${recipeImg.name}`)

    storageRef.put(recipeImg).then((snapshot) => {
      storageRef.getDownloadURL().then(function (url) {


        console.log(snapshot);
        return firestore.collection("recipes").add({

          ...recipe,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          initials: profile.firstName[0] + profile.lastName[0],
          username: profile.username,
          authorId: authorId,
          createdAt: new Date(),
          recipeImg: url
        })
      })
        .then(() => {
          dispatch({ type: "CREATE_RECIPE" })
        }).catch(err => {
          dispatch({ type: "CREATE_RECIPE_ERROR", err })
        })


    })
  }
}