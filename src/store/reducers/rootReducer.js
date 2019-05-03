import { combineReducers } from "redux"
import recipeReducer from "./recipeReducer"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"
import authReducer from "./authReducer"

const rootReducer = combineReducers({

  recipe: recipeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: authReducer

})

export default rootReducer