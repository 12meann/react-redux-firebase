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