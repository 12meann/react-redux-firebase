import { capitalize } from "../../ownFunction/otherFunc"

export const logIn = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firebase = getFirebase()

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: "LOGIN_SUCCESS" })
    }).catch(err => {
      dispatch({ type: "LOGIN_ERROR", err })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: "SIGN_OUT_SUCCESS" })
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firebase = getFirebase()
    const firestore = getFirestore()
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, newUser.password
    ).then((resp) => {
      return firestore.collection("users").doc(resp.user.uid).set({
        firstName: capitalize(newUser.firstName),
        lastName: capitalize(newUser.lastName),
        username: newUser.username,
        initials: capitalize(newUser.firstName[0]) + capitalize(newUser.lastName[0])
      })
    }).then(() => {
      dispatch({ type: "SIGN_UP_SUCCESS" })
    }).catch(err => {
      dispatch({ type: "SIGN_UP_ERROR", err })
    })
  }
}