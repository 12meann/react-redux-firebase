import { combineReducers } from "redux"
import recipeReducer from "./recipeReducer"
import { firestoreReducer } from "redux-firestore"


const rootReducer = combineReducers({

  recipe: recipeReducer,
  firestore: firestoreReducer

})

export default rootReducer