import { storage } from "../../config/fbConfig"
import { capitalize } from "../../ownFunction/otherFunc"



export const createRecipe = recipe => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    const recipeImg = recipe.recipeImg
    const storageRef = storage.ref().child(`/recipeImg/${recipeImg.name}`)

    storageRef.put(recipeImg).then(() => {
      storageRef.getDownloadURL().then(url => {

        return firestore.collection("recipes").add({
          ...recipe,
          authorFirstName: capitalize(profile.firstName),
          authorLastName: capitalize(profile.lastName),
          initials: capitalize(profile.firstName[0]) + capitalize(profile.lastName[0]),
          username: profile.username,
          authorId: authorId,
          createdAt: new Date(),
          recipeImg: url
        }).then(() => {
          dispatch({ type: "CREATE_RECIPE" })
        }).catch(err => {
          dispatch({ type: "CREATE_RECIPE_ERROR", err })
        })
      }).then(() => {
        dispatch({ type: "IMAGE ON FS" })
      }).catch((err) => {
        dispatch({ type: "ERROR ON IMAGE FS", err })
      })

    })
  }
}

export const deleteRecipe = (recipeid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()

    firestore.collection("recipes").doc(recipeid).delete()

      .then(() => {
        dispatch({ type: "DELETE RECIPE" })
      })

      .catch(err => {
        dispatch({ type: "ERROR DELETING RECIPE", err })
        console.error("Error removing document: ", err);
      });
  }

}

export const updateRecipe = (id, updatedRecipe) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {

    const firestore = getFirestore()

    firestore.collection("recipes").doc(id).set({
      ...updatedRecipe,
      updatedAt: new Date()
    }, { merge: true }

    ).then((doc) => {

      dispatch({ type: "UPDATE RECIPE" }, doc)

    }).catch(err => {
      dispatch({ type: "ERROR UPDATE", err })
    })
  }
}